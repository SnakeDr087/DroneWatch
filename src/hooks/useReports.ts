import { useState, useEffect } from 'react';
import { reportService } from '../services/supabase/reports';
import { evidenceService } from '../services/supabase/evidence';
import type { DroneReport } from '../types/report';

export function useReports() {
  const [reports, setReports] = useState<DroneReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const data = await reportService.getReports();
      setReports(data);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const createReport = async (report: Omit<DroneReport, 'id' | 'dateTime'>) => {
    try {
      const newReport = await reportService.createReport(report);
      setReports(prev => [newReport, ...prev]);
      return newReport;
    } catch (err) {
      setError(err as Error);
      throw err;
    }
  };

  const updateReport = async (id: string, updates: Partial<DroneReport>) => {
    try {
      const updatedReport = await reportService.updateReport(id, updates);
      setReports(prev => 
        prev.map(report => 
          report.id === id ? updatedReport : report
        )
      );
      return updatedReport;
    } catch (err) {
      setError(err as Error);
      throw err;
    }
  };

  const uploadEvidence = async (reportId: string, file: File) => {
    try {
      const evidence = await evidenceService.uploadEvidence(reportId, file);
      setReports(prev =>
        prev.map(report =>
          report.id === reportId
            ? { ...report, evidence: [...report.evidence, evidence] }
            : report
        )
      );
      return evidence;
    } catch (err) {
      setError(err as Error);
      throw err;
    }
  };

  return {
    reports,
    loading,
    error,
    fetchReports,
    createReport,
    updateReport,
    uploadEvidence
  };
}