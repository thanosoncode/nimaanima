import Image from "next/image";
import hero from "../assets/hero.jpg";
import category1 from "../assets/category1.jpg";
import category2 from "../assets/category2.jpg";
import category3 from "../assets/category3.jpg";
import category4 from "../assets/category4.jpg";
import about1 from "../assets/about1.jpg";
import Container from "./components/Container";
import { techniques } from "./data/techniques";
import Contact from "./components/Contact";
import { store } from "./store";

const Home = () => {
  const products = store.getState().products.products;

  return (
    <>
      <Container>
        <div className="my-20">
          <div className="flex flex-col gap-20">
            <Image src={hero} alt="hero"></Image>
            <section>
              <h4 className="py-4 text-2xl">Categories</h4>
              <div className="grid grid-cols-4 gap-4">
                <div className="border-gray overflow-hidden rounded-xl border">
                  <Image src={category1} alt="category-item-1" />
                  <p className="p-4 text-center">category 1</p>
                </div>
                <div>
                  <div className="border-gray overflow-hidden rounded-xl border">
                    <Image src={category2} alt="category-item-2" />
                    <p className="p-4 text-center">category 2</p>
                  </div>
                </div>
                <div>
                  <div className="border-gray overflow-hidden rounded-xl border">
                    <Image src={category3} alt="category-item-3" />
                    <p className="p-4 text-center">category 3</p>
                  </div>
                </div>
                <div>
                  <div className="border-gray overflow-hidden rounded-xl border">
                    <Image src={category4} alt="category-item-4" />
                    <p className="p-4 text-center">category 4</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex items-center justify-center gap-8">
              <div className="overflow-hidden rounded-xl">
                <Image src={about1} alt="about-1" />
              </div>
              <article className="flex flex-col gap-4">
                <h2 className="text-4xl">
                  Elegant Handmade Bridal Capes to Wow on Your Big Day
                </h2>
                <p>
                  With options for every style, budget, and type of wedding,
                  these exquisitely crafted bridal capes add the perfect dose of
                  drama.
                </p>
              </article>
            </section>
            <section>
              <h4 className="py-4 text-2xl">Products</h4>
              <div className="flex gap-4 overflow-hidden">
                {products.map((product) => (
                  <div className="h-64 w-64 shrink-0" key={product.id}>
                    <Image src={product.images[0]} alt={product.name} />
                    <p className="">{product.name}</p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h4 className="py-4 text-2xl">Techniques</h4>
              <div className="border-gray flex flex-col items-center overflow-hidden rounded-xl border">
                <Image src={techniques[0].mainImage} alt="technique-1" />
                <div className="p-4">
                  <h4 className="text-xl">{techniques[0].name}</h4>
                  <p>{techniques[0].title}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
      <Contact />
    </>
  );
};
export default Home;
