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
      <Container classes="h-full lg:px-8 lg:w-full xl:max-w-[1400px] md:w-full md:px-8 w-full px-2">
        <div className="mt-10 mb-40">
          <ProductList
            title={"Find something you love"}
            products={products}
            filterByCategory={true}
            showFilter={true}
          />
        </div>
      </Container>
      <FooterCTA />
    </>
  );
};
export default ProductsPage;
