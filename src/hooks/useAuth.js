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
        } catch (error) {
            setError(error.response?.data?.error || error.message);
            throw error
        }
    }
    
    return {register, error};
};