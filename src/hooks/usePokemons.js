import { useEffect, useState } from "react"
import api from "../api/pokeApi";

const usePokemons = (limit) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/pokemon?limit=${limit}`);
                setPokemons(response.data.results);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, [limit]);

    return { pokemons, loading, error };
};

export default usePokemons;