import Container from "./components/Container";
import FooterCTA from "./components/FooterCTA";
import { Product } from "./utils/models";
import Categories from "./components/Categories";
import HomeArticle from "./components/HomeArticle";
import Slider from "./components/Slider";
import { getAllProducts } from "@/lib/products";
import ProductList from "./products/components/ProductList";

const Home = async () => {
  const products = (await getAllProducts()) as Product[];

  return (
    <>
      <Container>
        <div className="mt-10 mb-40">
          <div className="flex flex-col gap-20">
            <Categories />
            {/* <Slider products={products} /> */}
            <HomeArticle />
            <ProductList
              title={"Latest items"}
              products={products.slice(0, 3)}
              filterByCategory={false}
            />
          </div>
        </div>
      </Container>
      <FooterCTA />
    </>
  );
};
export default Home;
