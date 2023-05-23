import CategoryButton from "./CategoryButton";
import { categories } from "@/app/data/categories";
import GreenWaveTest from "../components/GreenWave";
import GreenMobileWaveTest from "../components/GreenMobileWave";

interface ProductsHeaderProps {}

const ProductsHeader: React.FC<ProductsHeaderProps> = () => {
  return (
    <header className="relative mb-24 bg-lightGreen-400 sm:mb-40">
      <div className="absolute inset-0 top-20 z-10 flex flex-col items-center justify-center sm:top-28">
        <h1 className="whitespace-normal  pb-3 pt-6  text-center text-2xl font-light tracking-wide sm:whitespace-nowrap sm:text-3xl">
          Handmade and one of a kind creations.
        </h1>
        <p className="pb-0 text-center font-extralight sm:pb-8 sm:font-normal">
          Browse the categories of our unique selection
        </p>
        <section className="mt-6 flex items-center justify-center gap-6 sm:mt-0 sm:gap-12">
          {categories.map((category) => (
            <CategoryButton category={category} key={category.name} />
          ))}
        </section>
      </div>
      <div className="block bg-lightGreen-400 pt-36 sm:hidden">
        <GreenMobileWaveTest />
      </div>
      <div className="hidden bg-lightGreen-400 pt-24 sm:block">
        <GreenWaveTest />
      </div>
    </header>
  );
};
export default ProductsHeader;
