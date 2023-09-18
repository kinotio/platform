declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_ENV: string
      NEXT_OUTPUT_MODE: string

      NEXT_PUBLIC_SUPABASE_URL: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string

      NEXT_PUBLIC_IPINFO_URL: string
      NEXT_PUBLIC_IPINFO_TOKEN: string

      NEXT_PUBLIC_HASURA_URL: string
      NEXT_PUBLIC_HASURA_SECRET: string

      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string
      CLERK_SECRET_KEY: string
      NEXT_PUBLIC_CLERK_SIGN_IN_URL: string
      NEXT_PUBLIC_CLERK_SIGN_UP_URL: string
      NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: string
      NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: string
    }
  }
}

export {}
