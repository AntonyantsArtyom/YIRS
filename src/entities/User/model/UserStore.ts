import { create } from "zustand";

import { IUserStore, TUser } from "./types";
import { api } from "../../../shared/api/api";

export const useUserStore = create<IUserStore>((set) => ({
  user: null,
  loading: false,
  login: async (email, password) => {
    const res = await api.post<TUser>("/sessions", {
      email,
      password,
    });
    set({ user: res.data });
  },
}));
