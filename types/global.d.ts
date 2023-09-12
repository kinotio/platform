import type { Database } from '@lib/supabase'

declare global {
  type SupabaseDatabase = Database
  type SupabaseDatabaseSubscribers = DB['public']['Tables']['subscribers']['Row']
}
