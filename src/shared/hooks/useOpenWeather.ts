import { useState, useEffect } from "react";
import { OpenWeather } from "../types";

export const useOpenWeather = (url: string) => {
  const [data, setData] = useState<OpenWeather | null>(null);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        throw new Error(`Error on fetch OpenWeather API with error: ${JSON.stringify(error)}`);
      }
    };
    fetchData();
  }, [url]);

  return { data };
};