import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";

export function useSendTestLogin() {
    return useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await api.get("/user");
            return res.data;
        },
    });
}
