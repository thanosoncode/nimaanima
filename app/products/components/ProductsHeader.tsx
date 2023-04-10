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
    <header className="bg-lightPink-400">
      <Container classes="relative">
        <h1 className="text-3xl text-center font-extralight tracking-wide pt-6 pb-28">
          Find things you'll love. Support independent sellers. Only on Etsy.
        </h1>
        <section
          className="flex gap-12 items-center justify-center"
          style={{
            position: "absolute",
            top: "100px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {categories.map((category) => (
            <Link href={`/products/${category.name}`} key={category.name}>
              <CategoryButton category={category} />
            </Link>
          ))}
        </section>
      </Container>
    </header>
  );
};
export default ProductsHeader;
