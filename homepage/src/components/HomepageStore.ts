import { create } from 'zustand';

interface StoreState {
    siteUI: 'light' | 'dark';
    swapUI: () => void;
}

export const useStore = create<StoreState>((set, get) => ({
    siteUI: 'light',
    swapUI: () => {
        const { siteUI } = get();
        let newUI: 'light' | 'dark' = siteUI === 'light' ? 'dark' : 'light'
        set({ siteUI: newUI });
    },
}));
