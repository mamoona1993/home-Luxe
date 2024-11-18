import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiProducts";
import Spinner from "./Spinner";
import ProductItem from "./ProductItem";
import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import Pagination from "./Pagination";

const StyledPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  margin: 8rem auto;
`;

const ProductFooter = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  /* margin-left: 6rem; */
  /* padding: 1.2rem; */
  &:not(:has(*)) {
    display: none;
  }
`;

function ProductsPage() {
  const { isLoading, error, products, count } = useProducts();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get("category") || "all";
  // console.log(filterValue);

  let filteredProducts;

  if (filterValue === "all") filteredProducts = products;

  if (filterValue === "furniture")
    filteredProducts = products.filter(
      (product) => product.category === "furniture"
    );

  if (filterValue === "decor")
    filteredProducts = products.filter(
      (product) => product.category === "decor"
    );
  if (filterValue === "mirror")
    filteredProducts = products.filter(
      (product) => product.category === "mirror"
    );
  if (filterValue === "plant")
    filteredProducts = products.filter(
      (product) => product.category === "plant"
    );

  // if (filterValue === "furniture")
  //   filteredProducts = products.filter(
  //     // (product) => product.category === furniture
  //   );

  // if (filterValue === "decor")
  //   filteredProducts = products.filter((product) => product.category === decor);

  // if (filterValue === "plant")
  //   filteredProducts = products.filter((product) => product.category === plant);

  // if (filterValue === "mirror")
  //   filteredProducts = products.filter(
  //     (product) => product.category === mirror
  //   );

  return (
    <>
      <StyledPage>
        {filteredProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </StyledPage>
      <ProductFooter>
        <Pagination count={count} />
      </ProductFooter>
    </>
  );
}

export default ProductsPage;
