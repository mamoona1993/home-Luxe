import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiProducts";
import { useSearchParams } from "react-router-dom";

export function useProducts() {
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: products, count } = {},
    error,
  } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts({ page }),
  });
  return { isLoading, error, products, count };
}
