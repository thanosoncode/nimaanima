import Container from "./components/Container";
import FooterCTA from "./components/FooterCTA";
import { Product } from "./utils/models";
import Categories from "./components/Categories";
import HomeArticle from "./components/HomeArticle";
import { getAllProducts } from "@/lib/products";
import ProductList from "./products/ProductList";

const Home = async () => {
  const products = (await getAllProducts()) as Product[];

  return (
    <>
      <Container>
        <div className="mt-10 mb-40">
          <div className="mx-auto flex w-3/4 flex-col gap-20">
            <Categories />
            {/* <Slider products={products} /> */}
            <div className="mt-8">
              <HomeArticle />
            </div>
            <ProductList
              title={"Latest items"}
              products={products.slice(0, 3)}
              filterByCategory={false}
              showFilter={false}
            />
          </div>
        </div>
      </Container>
      <FooterCTA />
    </>
  );
};
export default Home;
