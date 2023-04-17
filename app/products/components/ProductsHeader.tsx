import Link from "next/link";
import Container from "../../components/Container";
import { StaticImageData } from "next/image";
import CategoryButton from "./CategoryButton";

interface ProductsHeaderProps {
  categories: {
    id: number;
    name: string;
    image: StaticImageData;
  }[];
}

const ProductsHeader: React.FC<ProductsHeaderProps> = ({ categories }) => {
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
