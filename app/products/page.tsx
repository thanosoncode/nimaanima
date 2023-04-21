import Container from "../components/Container";
import FooterCTA from "../components/FooterCTA";
import ProductsHeader from "./components/ProductsHeader";
import ProductList from "./components/ProductList";

const url =
  process.env.NODE_ENV === "production"
    ? "https://shop-next.netlify.app"
    : "http://localhost:3000";

const getProducts = async () => {
  const response = await fetch(`${url}/api/products`);
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
