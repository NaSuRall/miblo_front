import { useMutation } from "@tanstack/react-query";
import api from "../api/axios";

export function useSendLogin() {
    return useMutation({
        mutationKey: ["login"],
        mutationFn: async (data) => {
            const res = await api.post("/login", data);
            return res.data;
        },
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
        },
    });
}
