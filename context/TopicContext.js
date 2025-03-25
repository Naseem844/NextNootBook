"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const TopicsContext = createContext();

export function TopicsProvider({ children }) {
  const [topics, setTopics] = useState([]);

  const fetchTopics = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("failed to fetch data");
      }

      const data = await res.json();
      setTopics(data);
    } catch (error) {
      console.log("Error loading topics", error);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  return (
    <TopicsContext.Provider value={{ topics, fetchTopics }}>
      {children}
    </TopicsContext.Provider>
  );
}

export function useTopics() {
  return useContext(TopicsContext);
}