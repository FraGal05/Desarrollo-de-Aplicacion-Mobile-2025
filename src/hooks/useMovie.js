import { useEffect, useState } from "react"
import api from "../api/movieApi";

const useMovie = (name) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await api.get(`/search/shows?q=${name}`);
                setMovies(response.data);
            } catch (error) {
                console.log(error);
                setError(error);
            }
        };

        fetchMovie();
    }, [name]);

    return { movies, error };
};

export default useMovie;