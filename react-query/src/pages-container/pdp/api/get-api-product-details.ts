import api from "@/utils/https-service/api";
import type { ListResponse } from "@/utils/https-service/share.props";
import { useQuery } from "@tanstack/react-query";

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const endpoint = "/todos";

const getTodos = () => {
  return api.get<Array<ITodo>>(endpoint);
};

export const useTodos = () => {
  return useQuery({
    // initialData: ssrData,
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await getTodos();
      return response.data;
    },
  });
};
