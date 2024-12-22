export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          created_at: string
          role: string
          name: string | null
          phone: string | null
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
          role?: string
          name?: string | null
          phone?: string | null
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
          role?: string
          name?: string | null
          phone?: string | null
        }
      }
      reports: {
        Row: {
          id: string
          created_at: string
          user_id: string
          latitude: number
          longitude: number
          status: string
          emergency_status: string
          description: string | null
          drone_type: string | null
          drone_color: string | null
          estimated_altitude: string | null
          estimated_speed: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          latitude: number
          longitude: number
          status?: string
          emergency_status?: string
          description?: string | null
          drone_type?: string | null
          drone_color?: string | null
          estimated_altitude?: string | null
          estimated_speed?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          latitude?: number
          longitude?: number
          status?: string
          emergency_status?: string
          description?: string | null
          drone_type?: string | null
          drone_color?: string | null
          estimated_altitude?: string | null
          estimated_speed?: string | null
        }
      }
      evidence: {
        Row: {
          id: string
          report_id: string
          file_url: string
          file_type: string
          created_at: string
        }
        Insert: {
          id?: string
          report_id: string
          file_url: string
          file_type: string
          created_at?: string
        }
        Update: {
          id?: string
          report_id?: string
          file_url?: string
          file_type?: string
          created_at?: string
        }
      }
    }
  }
}