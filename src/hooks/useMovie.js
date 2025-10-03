import { useEffect, useState } from "react";
import api from "../api/movieApi";

export function useMovie(page = 1) {
  const [defaultShows, setShows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await api.get(`/shows?page=${page}`);
        setShows(response.data.slice(0, 10));
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };

    fetchMovie();
  }, [page]);

  return { defaultShows, error };
}

export function searchMovie(name) {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await api.get(`/search/shows?q=${name}`);
        setShows(response.data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };

    fetchMovie();
  }, [name]);

  return { shows, error };
}
