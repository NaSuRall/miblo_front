import { useMutation } from "@tanstack/react-query";
import api from "../api/axios";

export function useSendRegister() {
    return useMutation({
        mutationKey: ["register"],
        mutationFn: async (data) => {
            const res = await api.post("/register", data);
            return res.data;
        },
    });
}
