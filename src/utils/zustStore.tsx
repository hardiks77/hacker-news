import { create } from "zustand";

interface NewsItem {
  updated_at: string;
  id: number;
  title: string;
  description: string;
  objectID: string;
  children: [];
  text: string;
  points: number;
}

type NewsState = {
  news: NewsItem[];
  setNews: (items: NewsItem[]) => void;
  newsID: string | null;
  setNewsID: (id: string | null) => void;
  detailNews: NewsItem | null;
  setDetailNews: (news: NewsItem | null) => void;
};

export const useStore = create<NewsState>((set) => ({
  news: [],
  setNews: (items: NewsItem[]) => set({ news: items }),
  newsID: null,
  setNewsID: (id: string | null) => set({ newsID: id }),
  detailNews: null,
  setDetailNews: (news: NewsItem | null) => set({ detailNews: news }),
}));
