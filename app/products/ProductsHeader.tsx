import CategoryButton from "./CategoryButton";
import { categories } from "@/app/data/categories";
import Green from "@/app/components/Green";
import GreenMobile from "@/app/components/GreenMobile";

interface ProductsHeaderProps {}

const ProductsHeader: React.FC<ProductsHeaderProps> = () => {
  return (
    <header className="relative mb-28 bg-lightGreen-400 pb-40">
      <div
        className="absolute top-0 left-1/2 z-10 flex flex-col items-center justify-center"
        style={{ transform: "translateX(-50%" }}
      >
        <h1 className="whitespace-normal  pt-6 pb-6  text-center text-2xl font-normal tracking-wide sm:whitespace-nowrap sm:text-3xl">
          Handmade and one of a kind creations.
        </h1>
        <p className="pb-0 text-center text-sm sm:pb-8  sm:text-base">
          Browse the categories of our unique selection
        </p>
        <section className="mt-6 flex items-center justify-center gap-6 sm:mt-0 sm:gap-12">
          {categories.map((category) => (
            <CategoryButton category={category} key={category.name} />
          ))}
        </section>
      </div>
      <div className="absolute top-20 left-0 hidden w-full sm:block">
        <Green />
      </div>
      <div className="absolute top-32 left-0 block w-full sm:hidden">
        <GreenMobile />
      </div>
    </header>
  );
};
export default ProductsHeader;
