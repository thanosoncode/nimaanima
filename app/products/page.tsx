import { categories } from "../data/categories";
import Container from "../components/Container";
import Contact from "../components/Contact";
import ProductsHeader from "./components/ProductsHeader";
import Products from "./components/Products";
import { store } from "../store";
import { setProducts } from "../store/productsSlice";
import Some from "./Some";

const getProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  if (!response.ok) {
    throw new Error("error fetching products");
  }
  return response.json();
};

const ProductsPage = async () => {
  const products = await getProducts();
  store.dispatch(setProducts(products));

  return (
    <>
      <ProductsHeader categories={categories} />
      <Container>
        <Products products={products} />
      </Container>
      <Some />
      <Contact />
    </>
  );
};
export default ProductsPage;
