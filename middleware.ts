import { authMiddleware } from '@clerk/nextjs'

export const config = {
  // matcher: ['/((?!.*\\..*|_next).*)', '/in', '/(api|trpc)(.*)']
  matcher: []
}

export default authMiddleware({})
