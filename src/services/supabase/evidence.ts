import { supabase } from '../../lib/supabase';
import type { Evidence } from '../../types/report';

export const evidenceService = {
  async uploadEvidence(reportId: string, file: File): Promise<Evidence> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${reportId}/${Date.now()}.${fileExt}`;
    
    // Upload file to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('evidence')
      .upload(fileName, file);
      
    if (uploadError) throw uploadError;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('evidence')
      .getPublicUrl(fileName);

    // Create evidence record
    const { data, error } = await supabase
      .from('evidence')
      .insert({
        report_id: reportId,
        file_url: publicUrl,
        file_type: file.type
      })
      .select()
      .single();

    if (error) throw error;

    return {
      id: data.id,
      type: data.file_type.startsWith('image/') ? 'image' :
            data.file_type.startsWith('video/') ? 'video' : 'audio',
      file: {
        name: data.file_url,
        size: file.size
      },
      timestamp: data.created_at
    };
  },

  async deleteEvidence(evidenceId: string) {
    const { error } = await supabase
      .from('evidence')
      .delete()
      .eq('id', evidenceId);

    if (error) throw error;
  }
};