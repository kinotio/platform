import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type UserStoreType = {
  user: null
  setUser: Function
}

const userStore = (set: any) =>
  ({
    user: null,

    setUser: async (user: any) => {
      set(() => ({ user }))
    }
  }) as UserStoreType

export const useUserStore = create(persist(userStore, { name: 'user' }))
