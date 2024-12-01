import { create } from "zustand";
import { IStudentsStore, TStudent } from "./types";
import { useUserStore } from "../../User/model/UserStore";
import { api } from "../../../shared/api/api";

export const useStudentsStore = create<IStudentsStore>((set, get) => ({
  page: 1,
  size: 25,
  students: [],
  loading: false,
  loadStudents: async (page: number = 1) => {
    set({ loading: true });
    const { user } = useUserStore.getState();
    const { size } = get();
    set({ page: page });
    const res = await api.post<TStudent[]>("/api/get/all/users", null, {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`,
      },
      params: {
        page: page - 1,
        size: size,
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
    await store.loadStudents(get().page);
  },
  setPediculosis: async (id: string, date: string) => {
    const documentId = get().students.find((student) => student.id == id)!
      .pediculosis.id;
    const { user } = useUserStore.getState();
    set({ loading: true });
    const startDate = new Date(date);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 30);
    await api.patch(
      "/documents/edit",
      {
        id: documentId,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      },
      {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      }
    );

    const store = useStudentsStore.getState();
    await store.loadStudents(get().page);
  },
  setFluorography: async (id: string, date: string) => {
    const documentId = get().students.find((student) => student.id == id)!
      .fluorography.id;
    const { user } = useUserStore.getState();
    set({ loading: true });
    const startDate = new Date(date);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 365);
    await api.patch(
      "/documents/edit",
      {
        id: documentId,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      },
      {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      }
    );

    const store = useStudentsStore.getState();
    await store.loadStudents(get().page);
  },
}));
