import { navigate } from 'react-router-dom';

interface User {
  username: string;
  name: string;
  email: string;
}

class AuthService {
  private static instance: AuthService;
  private user: User | null = null;
  private isAuthenticated: boolean = false;

  // For demo purposes - in production this would be handled securely
  private readonly VALID_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
  };

  private constructor() {
    // Check for existing session
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.user = JSON.parse(savedUser);
      this.isAuthenticated = true;
    }
  }

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(username: string, password: string): Promise<boolean> {
    // In production, this would make an API call to validate credentials
    if (username === this.VALID_CREDENTIALS.username && 
        password === this.VALID_CREDENTIALS.password) {
      this.user = {
        username,
        name: 'Admin User',
        email: 'admin@example.com'
      };
      this.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(this.user));
      return true;
    }
    return false;
  }

  async signOut() {
    this.user = null;
    this.isAuthenticated = false;
    localStorage.removeItem('user');
    window.location.href = '/';
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUser(): User | null {
    return this.user;
  }
}

export const authService = AuthService.getInstance();