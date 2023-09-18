import { currentUser } from '@clerk/nextjs'

const useCurrentUser = async () => {
  const user = await currentUser()
  return user
}

export default useCurrentUser
