import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../services/apiProducts";
import { useParams } from "react-router-dom";

export function useProduct() {
  const { product_id } = useParams();
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(product_id),
    retry: false,
  });

  return { isLoading, error, product };
}
