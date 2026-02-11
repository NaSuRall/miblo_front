import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";

export function useTest() {
    return useQuery({
        queryFn: async () => {
            const res = await api.get("/test");
            return res.data;
        },
    });
}
