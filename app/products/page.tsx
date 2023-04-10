import { categories, products } from "../data/categories";
import Container from "../components/Container";
import Contact from "../components/Contact";
import ProductsHeader from "./components/ProductsHeader";
import Products from "./components/Products";

const ProductsPage = async () => {
  return (
    <>
      <ProductsHeader categories={categories} />
      <Container>
        <Products products={products} />
      </Container>
      <Contact />
    </>
  );
};
export default ProductsPage;
