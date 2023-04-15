import { categories } from "../data/categories";
import Container from "../components/Container";
import Contact from "../components/Contact";
import ProductsHeader from "./components/ProductsHeader";
import ProductList from "./components/ProductList";
import { store } from "../store";
import { setProducts } from "../store/productsSlice";

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
      <ProductsHeader categories={categories} />
      <Container>
        <ProductList products={products} />
      </Container>
      <Contact />
    </>
  );
};
export default ProductsPage;
