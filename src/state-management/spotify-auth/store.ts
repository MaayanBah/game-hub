import { create } from "zustand";

interface AuthDetailsStore {
  accessToken: string | undefined;
  setAccessToken: (accessToken: string) => void;
}

const useAuthStore = create<AuthDetailsStore>((set) => ({
  accessToken: undefined,
  setAccessToken: (accessToken: string) => set({ accessToken: accessToken }),
}));

export default useAuthStore;
