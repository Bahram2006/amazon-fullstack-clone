import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  email: string;
};

type AuthStore = {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,

      login: (email) =>
        set({
          user: { email },
        }),

      logout: () =>
        set({
          user: null,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);