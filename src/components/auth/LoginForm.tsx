import React, { useState } from 'react';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { useAuthContext } from './AuthProvider';

export function LoginForm() {
  const { signIn } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signIn(email, password);
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-md">
          <AlertCircle className="h-5 w-5" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <div className="mt-1 relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <div className="mt-1 relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Enter your password"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
      >
        {loading ? 'Signing in...' : 'Sign in'}
      </button>

      <div className="text-sm text-center text-gray-600">
        Test credentials: test@example.com / password123
      </div>
    </form>
  );
}