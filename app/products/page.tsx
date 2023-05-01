import Container from "../components/Container";
import FooterCTA from "../components/FooterCTA";
import ProductsHeader from "./components/ProductsHeader";
import ProductList from "./components/ProductList";
import { getAllProducts } from "@/lib/products";
import Filter from "./components/Filter";

const ProductsPage = async () => {
  const products = await getAllProducts();

  return (
    <>
      <ProductsHeader />
      <Container classes="h-full">
        <Filter />
        <div className="my-32">
          <ProductList
            title={"Find something you love"}
            products={products}
            filterByCategory={true}
          />
        </div>
      </Container>
      <FooterCTA />
    </>
  );
};
export default ProductsPage;
