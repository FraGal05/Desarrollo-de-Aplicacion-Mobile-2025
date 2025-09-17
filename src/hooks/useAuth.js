import { useRouter } from "expo-router"
import { useState } from "react";
import api from "../api/api";

export const useAuth = () => {

    const router = useRouter();
    const [error, setError] = useState(null);

    const register = async (data) => {
        try {
            const response = await api.post("/users/register", data);
            if (response.data.msg) router.replace("/login"); 
        } catch (err) {
            setError(err.response?.data?.error || err.message);
            throw err
        }
    }
    
    return {register, error};
};