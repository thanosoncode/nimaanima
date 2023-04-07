import Image from "next/image";
import hero from "../assets/hero.jpg";
import category1 from "../assets/category1.jpg";
import category2 from "../assets/category2.jpg";
import category3 from "../assets/category3.jpg";
import category4 from "../assets/category4.jpg";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import about1 from "../assets/about1.jpg";
import technique1 from "../assets/technique1.jpg";

const products = [
  { id: 1, name: "product 1", image: product1 },
  { id: 2, name: "product 2", image: product2 },
  { id: 3, name: "product 3", image: product3 },
  { id: 4, name: "product 4", image: product4 },
  { id: 5, name: "product 5", image: product5 },
  { id: 6, name: "product 6", image: product6 },
];

const Home = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col gap-20">
        <Image src={hero} alt="hero"></Image>
        <section>
          <h4 className="text-2xl py-4">Categories</h4>
          <div className="grid grid-cols-4 gap-4">
            <div className="rounded-xl border border-gray overflow-hidden">
              <Image src={category1} alt="category-item-1" />
              <p className="p-4 text-center">category 1</p>
            </div>
            <div>
              <div className="rounded-xl border border-gray overflow-hidden">
                <Image src={category2} alt="category-item-2" />
                <p className="p-4 text-center">category 2</p>
              </div>
            </div>
            <div>
              <div className="rounded-xl border border-gray overflow-hidden">
                <Image src={category3} alt="category-item-3" />
                <p className="p-4 text-center">category 3</p>
              </div>
            </div>
            <div>
              <div className="rounded-xl border border-gray overflow-hidden">
                <Image src={category4} alt="category-item-4" />
                <p className="p-4 text-center">category 4</p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex gap-8 justify-center items-center">
          <div className="rounded-xl overflow-hidden">
            <Image src={about1} alt="about-1" />
          </div>
          <article className="flex flex-col gap-4">
            <h2 className="text-4xl">
              Elegant Handmade Bridal Capes to Wow on Your Big Day
            </h2>
            <p>
              With options for every style, budget, and type of wedding, these
              exquisitely crafted bridal capes add the perfect dose of drama.
            </p>
          </article>
        </section>
        <section>
          <h4 className="text-2xl py-4">Products</h4>
          <div className="flex gap-4 overflow-hidden">
            {products.map((product) => (
              <div className="shrink-0 w-64 h-64" key={product.id}>
                <Image src={product.image} alt={product.name} />
                <p className="">{product.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h4 className="text-2xl py-4">Techniques</h4>
          <div className="rounded-xl border border-gray overflow-hidden flex flex-col items-center">
            <Image src={technique1} alt="technique-1" />
            <div className="p-4">
              <h4 className="text-xl">The Pile Weave - loom weave</h4>
              <p>
                If you’ve seen my work, you may have noticed that I love weaving
                loops. I really like the soft texture that they give weaves.
                They also give a more organic feel to my weaves.
              </p>
              <b>read more</b>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;
