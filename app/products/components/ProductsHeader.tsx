import CategoryButton from "./CategoryButton";
import { categories } from "@/app/data/categories";
import Green from "@/app/components/Green";

interface ProductsHeaderProps {}

const ProductsHeader: React.FC<ProductsHeaderProps> = () => {
  return (
    <header className="relative mb-20 bg-lightGreen-400 pb-40">
      <div
        className="absolute top-0 left-1/2 z-10 flex flex-col items-center justify-center"
        style={{ transform: "translateX(-50%" }}
      >
        <h1 className="pt-6 pb-2  text-center text-3xl font-extralight tracking-wide">
          All things are handmade and one of a kind creations.
        </h1>
        <p className="pb-8 text-center">
          Find your favorite item in our unique selection
        </p>
        <section className="flex items-center justify-center gap-12">
          {categories.map((category) => (
            <CategoryButton category={category} key={category.name} />
          ))}
        </section>
      </div>
      <div className="absolute top-28 left-0 w-full">
        <Green />
      </div>
    </header>
  );
};
export default ProductsHeader;
