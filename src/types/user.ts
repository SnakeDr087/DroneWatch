export interface User {
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  role: 'user' | 'admin';
  created_at: string;
}