import { v4 as uuidv4 } from 'uuid';

class AdminService {
  private static instance: AdminService;
  private registrations: any[] = [];
  private stats = {
    totalUsers: 45,
    pendingApprovals: 12,
    approvedUsers: 30,
    deniedRequests: 3
  };

  private constructor() {
    // Initialize with sample data
    this.registrations = Array.from({ length: 20 }, (_, i) => ({
      id: uuidv4(),
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString(),
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ['Admin', 'User', 'Manager'][Math.floor(Math.random() * 3)],
      status: ['pending', 'approved', 'denied'][Math.floor(Math.random() * 3)],
      company: `Company ${i + 1}`,
      notes: []
    }));
  }

  static getInstance(): AdminService {
    if (!AdminService.instance) {
      AdminService.instance = new AdminService();
    }
    return AdminService.instance;
  }

  async getStats() {
    return this.stats;
  }

  async getRegistrations(page: number, filters: any, search: string) {
    let filtered = [...this.registrations];

    if (search) {
      filtered = filtered.filter(reg => 
        reg.name.toLowerCase().includes(search.toLowerCase()) ||
        reg.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filters.status) {
      filtered = filtered.filter(reg => reg.status === filters.status);
    }

    if (filters.role) {
      filtered = filtered.filter(reg => reg.role === filters.role);
    }

    if (filters.dateRange.start && filters.dateRange.end) {
      filtered = filtered.filter(reg => {
        const date = new Date(reg.date);
        return date >= new Date(filters.dateRange.start) &&
               date <= new Date(filters.dateRange.end);
      });
    }

    const perPage = 10;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return {
      registrations: filtered.slice(start, end),
      totalPages: Math.ceil(filtered.length / perPage)
    };
  }

  async approveRegistration(id: string) {
    const registration = this.registrations.find(r => r.id === id);
    if (registration) {
      registration.status = 'approved';
      this.stats.approvedUsers++;
      this.stats.pendingApprovals--;
    }
  }

  async denyRegistration(id: string) {
    const registration = this.registrations.find(r => r.id === id);
    if (registration) {
      registration.status = 'denied';
      this.stats.deniedRequests++;
      this.stats.pendingApprovals--;
    }
  }

  async addNote(id: string, note: string) {
    const registration = this.registrations.find(r => r.id === id);
    if (registration) {
      registration.notes.push({
        id: uuidv4(),
        text: note,
        date: new Date().toISOString(),
        author: 'Admin'
      });
    }
  }
}

export const adminService = AdminService.getInstance();