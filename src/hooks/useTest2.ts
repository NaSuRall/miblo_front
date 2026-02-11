import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";

export function useTest2() {
    return useQuery({
        queryKey: ["test2"],
        queryFn: async () => {
            const res = await api.get("/test/test");
            return res.data;
        },
    });
}
