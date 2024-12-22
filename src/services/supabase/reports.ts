import { supabase } from '../../lib/supabase';
import type { Database } from '../../types/supabase';
import type { DroneReport } from '../../types/report';

type DbReport = Database['public']['Tables']['reports']['Row'];

const transformDbReport = (dbReport: DbReport): DroneReport => ({
  id: dbReport.id,
  dateTime: dbReport.created_at,
  location: {
    latitude: dbReport.latitude,
    longitude: dbReport.longitude
  },
  status: dbReport.status as DroneReport['status'],
  emergencyStatus: dbReport.emergency_status as DroneReport['emergencyStatus'],
  behavior: {
    description: dbReport.description || undefined
  },
  droneCharacteristics: {
    type: dbReport.drone_type || undefined,
    color: dbReport.drone_color || undefined,
    estimatedAltitude: dbReport.estimated_altitude || undefined,
    estimatedSpeed: dbReport.estimated_speed || undefined
  },
  witness: {
    // Witness info will be joined from users table
    name: '',
    phone: '',
    email: ''
  },
  evidence: [] // Evidence will be fetched separately
});

export const reportService = {
  async getReports() {
    const { data, error } = await supabase
      .from('reports')
      .select(`
        *,
        users (
          name,
          phone,
          email
        ),
        evidence (
          id,
          file_url,
          file_type,
          created_at
        )
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return data.map(report => ({
      ...transformDbReport(report),
      witness: {
        name: report.users.name || '',
        phone: report.users.phone || '',
        email: report.users.email
      },
      evidence: report.evidence.map(e => ({
        id: e.id,
        type: e.file_type,
        file: { name: e.file_url, size: 0 }, // Size not stored in DB
        timestamp: e.created_at
      }))
    }));
  },

  async createReport(report: Omit<DroneReport, 'id' | 'dateTime'>) {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('reports')
      .insert({
        user_id: userData.user.id,
        latitude: report.location.latitude,
        longitude: report.location.longitude,
        status: report.status,
        emergency_status: report.emergencyStatus,
        description: report.behavior.description,
        drone_type: report.droneCharacteristics.type,
        drone_color: report.droneCharacteristics.color,
        estimated_altitude: report.droneCharacteristics.estimatedAltitude,
        estimated_speed: report.droneCharacteristics.estimatedSpeed
      })
      .select()
      .single();

    if (error) throw error;
    return transformDbReport(data);
  },

  async updateReport(id: string, updates: Partial<DroneReport>) {
    const { data, error } = await supabase
      .from('reports')
      .update({
        status: updates.status,
        emergency_status: updates.emergencyStatus,
        description: updates.behavior?.description,
        drone_type: updates.droneCharacteristics?.type,
        drone_color: updates.droneCharacteristics?.color,
        estimated_altitude: updates.droneCharacteristics?.estimatedAltitude,
        estimated_speed: updates.droneCharacteristics?.estimatedSpeed
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return transformDbReport(data);
  }
};