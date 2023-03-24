import Products from "./products";

const ProductsPage = () => {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Products />
    </div>
  );
};
export default ProductsPage;
