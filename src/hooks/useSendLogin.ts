import { useMutation } from "@tanstack/react-query";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSendLogin() {
    const navigate = useNavigate();
    return useMutation({
        mutationKey: ["login"],
        mutationFn: async (data) => {
            const res = await api.post("/login", data);
            return res.data;
        },
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            if (data.message) {
                toast.success(data.message);
            } else {
                toast.success("Connexion réussie");
            }

            navigate("/");
        },
        onError: (error: any) => {
           
            const msg = error?.response?.data?.message || "Erreur inconnue";
            toast.error(msg);
        }

    });
}
