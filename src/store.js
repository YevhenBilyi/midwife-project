// src/store.js
import { create } from 'zustand';

const useStore = create(set => ({
  currentPage: 1, // Initial page
  navigateTo: (page) => set(() => ({ currentPage: page })),
  // Add other global states and methods here
}));

export default useStore;
