import { create } from "zustand";

export const useAppStore = create((set) => ({
  domain: "",
  dealerData: [],
  baseUrl: "",
  baseImageUrl: "",
  baseSpecialImageUrl: "",
  currentMenu: "",
  setInitialData: ({
    domain,
    dealerData,
    baseUrl,
    baseImageUrl,
    baseSpecialImageUrl,
  }) => {
    set({ domain, dealerData, baseUrl, baseImageUrl, baseSpecialImageUrl });
  },
  setCurrentMenu: ({ currentMenu }) => {
    set({ currentMenu });
  },
}));
