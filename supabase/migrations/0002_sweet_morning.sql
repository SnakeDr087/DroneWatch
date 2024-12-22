/*
  # Add Test User

  1. New Data
    - Creates a test user with email test@example.com
    - Sets up initial user profile
  
  2. Security
    - Password will be set through Auth UI
    - User has basic role permissions
*/

-- Insert test user profile
INSERT INTO public.users (
  email,
  role,
  name,
  phone
) VALUES (
  'test@example.com',
  'user',
  'Test User',
  '555-0123'
);