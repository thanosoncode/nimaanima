import Container from "../../components/Container";
import CategoryButton from "./CategoryButton";
import { categories } from "@/app/data/categories";

interface ProductsHeaderProps {}

const ProductsHeader: React.FC<ProductsHeaderProps> = () => {
  return (
    <header className=" bg-lightGreen-400 pb-4">
      <Container classes="relative">
        <h1 className="pt-6 pb-28 text-center text-3xl font-extralight tracking-wide">
          Find things you&apos;ll love. Support independent sellers. Only on
          Etsy.
        </h1>
        <section
          className="flex items-center justify-center gap-16"
          style={{
            position: "absolute",
            top: "100px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {categories.map((category) => (
            <CategoryButton category={category} key={category.name} />
          ))}
        </section>
      </Container>
    </header>
  );
};
export default ProductsHeader;
