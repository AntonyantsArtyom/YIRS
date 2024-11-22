import { create } from "zustand";
import { IStudentsStore, TStudent } from "./types";
import { useUserStore } from "../../User/model/UserStore";
import { api } from "../../../shared/api/api";

export const useStudentsStore = create<IStudentsStore>((set) => ({
  students: [],
  loading: false,
  loadStudents: async () => {
    set({ loading: true });
    const { user } = useUserStore.getState();
    const res = await api.post<TStudent[]>("/api/get/all/users", null, {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`,
      },
    });
    set({ students: res.data, loading: false });
  },
  setBalance: async (id: string, newBalance: number) => {
    const { user } = useUserStore.getState();
    set({ loading: true });
    await api.post(
      "/balance",
      {
        user: id,
        balance: newBalance,
      },
      {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      }
    );
    const store = useStudentsStore.getState();
    await store.loadStudents();
  },
}));
