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
        <div className="mt-10 mb-40">
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
