import { createClient } from '@supabase/supabase-js'

const supabaseEnvironment = Object.freeze({
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
})

export const supabase = createClient(supabaseEnvironment.url, supabaseEnvironment.key)
