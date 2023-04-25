import Container from "../components/Container";
import FooterCTA from "../components/FooterCTA";
import ProductsHeader from "./components/ProductsHeader";
import ProductList from "./components/ProductList";
import { getAllProducts } from "@/lib/products";

const ProductsPage = async () => {
  const products = await getAllProducts();

  return (
    <>
      <ProductsHeader />
      <Container classes="h-full">
        <ProductList products={products} />
      </Container>
      <FooterCTA />
    </>
  );
};
export default ProductsPage;
