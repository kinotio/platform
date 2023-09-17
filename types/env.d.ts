declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_URL: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string
      NEXT_PUBLIC_IPINFO_URL: string
      NEXT_PUBLIC_IPINFO_TOKEN: string
      NEXT_PUBLIC_HASURA_URL: string
      NEXT_PUBLIC_HASURA_SECRET: string
    }
  }
}

export {}
