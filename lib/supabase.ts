import { createClient } from '@supabase/supabase-js'

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      subscribers: {
        Row: {
          id: number
          email: string
        }
        Insert: {
          id?: number
          email?: string
        }
      }
      joiners: {
        Row: {
          id: number
          first_name: string
          last_name: string
          email: string
          birthdate: string
          phone: string
          country: string
          region: string
          postal_code: string
          position: string
          github_username: string
          gitlab_username: string
        }
        Insert: {
          id?: number
          first_name?: string
          last_name?: string
          email?: string
          birthdate?: string
          phone?: string
          country?: string
          region?: string
          postal_code?: string
          position?: string
          github_username?: string
          gitlab_username?: string
        }
      }
    }
  }
}

const supabaseEnvironment = Object.freeze({
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
})

export const supabaseClient = createClient(supabaseEnvironment.url, supabaseEnvironment.key)
