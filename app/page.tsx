import Image from "next/image";
import hero from "../assets/hero.jpg";
import Container from "./components/Container";
import FooterCTA from "./components/FooterCTA";
import { Product } from "./utils/models";
import Categories from "./components/Categories";
import HomeArticle from "./components/HomeArticle";
import Slider from "./components/Slider";

const getProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  if (!response.ok) {
    throw new Error("error fetching products");
  }
  return response.json();
};

const Home = async () => {
  const products = (await getProducts()) as Product[];

  return (
    <>
      <Container>
        <div className="my-20">
          <div className="flex flex-col gap-20">
            {/* <Image src={hero} alt="hero" /> */}
            <Categories />
            <HomeArticle />
            <Slider products={products} />
          </div>
        </div>
      </Container>
      <FooterCTA />
    </>
  );
};
export default Home;
