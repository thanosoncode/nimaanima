import Contact from "@/app/components/Contact";
import Container from "@/app/components/Container";
import { categories, products } from "@/app/data/categories";
import ProductsHeader from "../components/ProductsHeader";
import Products from "../components/Products";

const Category = ({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) => {
  const productsByCategory = products.filter(
    (product) => product.category === categoryId
  );
  return (
    <>
      <ProductsHeader categories={categories} />
      <Container>
        <Products products={productsByCategory} />
      </Container>
      <Contact />
    </>
  );
};
export default Category;
