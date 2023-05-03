import Container from "../../components/Container";
import CategoryButton from "./CategoryButton";
import { categories } from "@/app/data/categories";

interface ProductsHeaderProps {}

const ProductsHeader: React.FC<ProductsHeaderProps> = () => {
  return (
    <header className=" bg-lightGreen-400 pb-4">
      <Container classes="flex flex-col items-center">
        <h1 className="pt-6 pb-2  text-center text-3xl font-extralight tracking-wide">
          All things are handmade and one of a kind creations.
        </h1>
        <p className="pb-12 text-center">
          Find your favorite item in our unique selection
        </p>
        <section className="flex items-center justify-center gap-16">
          {categories.map((category) => (
            <CategoryButton category={category} key={category.name} />
          ))}
        </section>
      </Container>
    </header>
  );
};
export default ProductsHeader;
