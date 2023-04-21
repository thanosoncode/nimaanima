import Container from "./components/Container";
import FooterCTA from "./components/FooterCTA";
import { Product } from "./utils/models";
import Categories from "./components/Categories";
import HomeArticle from "./components/HomeArticle";
import Slider from "./components/Slider";

const url =
  process.env.NODE_ENV === "production"
    ? "https://shop-next.netlify.app"
    : "http://localhost:3000";

const getProducts = async () => {
  const response = await fetch(`${url}/api/products`);
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
        <div className="mt-10 mb-40">
          <div className="flex flex-col gap-40">
            <Categories />
            <Slider products={products} />
            <HomeArticle />
          </div>
        </div>
      </Container>
      <FooterCTA />
    </>
  );
};
export default Home;
