import Image from "next/image";
import { categories } from "../data/categories";

const ProductsNew = () => {
  return (
    <>
      <header className="bg-lightGreen">
        <div className="w-3/4 mx-auto relative">
          <h1 className="text-3xl text-center font-extralight tracking-wide pt-6 pb-28">
            Find things you'll love. Support independent sellers. Only on Etsy.
          </h1>
          <section
            className="flex gap-12 items-center justify-center"
            style={{
              position: "absolute",
              top: "140px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <div className="w-24 h-24 overflow-hidden rounded-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="object-fill w-24 h-24"
                  />
                </div>
                <p>{category.name}</p>
              </div>
            ))}
          </section>
        </div>
      </header>
    </>
  );
};
export default ProductsNew;
