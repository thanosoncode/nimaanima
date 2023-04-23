import Container from "../components/Container";
import FooterCTA from "../components/FooterCTA";
import ProductsHeader from "./components/ProductsHeader";
import ProductList from "./components/ProductList";

const getProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  if (!response.ok) {
    throw new Error("error fetching products");
  }
  return response.json();
};

const ProductsPage = async () => {
  const products = await getProducts();

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
