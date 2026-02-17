import { useMutation } from "@tanstack/react-query";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSendRegister() {
    const navigate = useNavigate();
    return useMutation({
        mutationKey: ["register"],
        mutationFn: async (data) => {
            const res = await api.post("/register", data);
            return res.data;
        },
        onSuccess: (data) => {

            if (data.message) {
                toast.success(data.message);
            } else {
                toast.success("Connexion réussie");
            }

            navigate("/login");
        },
        onError: (error: any) => {
            const msg = error?.response?.data?.message || "Une erreur est survenue";
            toast.error(msg);
        }
    });
}
