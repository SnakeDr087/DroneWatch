/*
  # Initial Schema Setup for DroneWatch

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text, unique)
      - created_at (timestamp)
      - role (text)
      - name (text)
      - phone (text)
      
    - reports
      - id (uuid, primary key)
      - created_at (timestamp)
      - user_id (uuid, foreign key)
      - latitude (double precision)
      - longitude (double precision)
      - status (text)
      - emergency_status (text)
      - description (text)
      - drone_type (text)
      - drone_color (text)
      - estimated_altitude (text)
      - estimated_speed (text)
      
    - evidence
      - id (uuid, primary key)
      - report_id (uuid, foreign key)
      - file_url (text)
      - file_type (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  role text NOT NULL DEFAULT 'user',
  name text,
  phone text
);

-- Create reports table
CREATE TABLE reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES users(id) NOT NULL,
  latitude double precision NOT NULL,
  longitude double precision NOT NULL,
  status text NOT NULL DEFAULT 'draft',
  emergency_status text NOT NULL DEFAULT 'routine',
  description text,
  drone_type text,
  drone_color text,
  estimated_altitude text,
  estimated_speed text
);

-- Create evidence table
CREATE TABLE evidence (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id uuid REFERENCES reports(id) ON DELETE CASCADE NOT NULL,
  file_url text NOT NULL,
  file_type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE evidence ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can read all reports"
  ON reports
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create reports"
  ON reports
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own reports"
  ON reports
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can read all evidence"
  ON evidence
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can upload evidence"
  ON evidence
  FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM reports 
    WHERE reports.id = evidence.report_id 
    AND reports.user_id = auth.uid()
  ));