import { create } from 'zustand';

interface IStore {
   currentView: number;
   setCurrentView: (view: number) => void;
}

const useQuizStore = create<IStore>((set) => ({
   currentView: 0,
   setCurrentView: (view: number) => set(() => ({ currentView: view })),
}));

export default useQuizStore;
