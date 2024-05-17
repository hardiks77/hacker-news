import React from "react";
import axios from "axios";

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

export const searchNews = (
  query: string,
  setNews: (items: NewsItem[]) => void
): Promise<void> => {
  return axios
    .get(`https://hn.algolia.com/api/v1/search?query=${query}&tags=story`)
    .then((res) => {
      const persons = res.data.hits;
      setNews(res.data.hits);
      console.log("persons: ", persons);
    });
};

export const fetchItem = (objectID: string, setDetailNews): Promise<void> => {
  return axios
    .get(`https://hn.algolia.com/api/v1/items/${objectID}`)
    .then((res) => {
      const persons = res.data;
      setDetailNews(res.data);
      console.log("item: ", persons);
    });
};
