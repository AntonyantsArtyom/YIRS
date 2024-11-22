import { create } from "zustand";

import { IFilterFormStore } from "./types";

export const useFilterFormStore = create<IFilterFormStore>((set, get) => ({
  filtersOpened: false,
  toggleFiltersOpened: () => {
    const opened = get().filtersOpened;
    set({ filtersOpened: !opened });
  },
}));
