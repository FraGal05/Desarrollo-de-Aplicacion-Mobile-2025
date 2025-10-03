import { useEffect, useState } from "react";
import api from "../api/movieApi";

const useMovie = (name) => {
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
};

export default useMovie;
