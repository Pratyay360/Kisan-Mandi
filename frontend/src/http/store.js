import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useTokenStore = create(
  devtools(
    persist(
      (set) => ({
        token: '',
        role: '',
        name: '',
        userId: '',

        setToken: (token) => set(() => {
          console.log("Setting token:", token);
          return { token };
        }),
        setRole: (role) => set(() => {
          console.log("Setting role:", role);
          return { role };
        }),
        setName: (name) => set(() => {
          console.log("Setting name:", name);
          return { name };
        }),
        setUserId: (userId) => set(() => {
          console.log("Setting userId:", userId);
          return { userId };
        }),
        reset: () => set(() => ({ token: '', role: '', name: '', userId: '' })), // Ensure all are cleared
      }),
      {
        name: 'user-store',
      }
    )
  )
);

export default useTokenStore;
