import Link from "next/link";
import Container from "../components/Container";
import { techniques } from "../data/techniques";
import Image from "next/image";
import FooterCTA from "../components/FooterCTA";
import bg from "../../public/assets/howmade-bg-no-b.png";
import HomeArticle from "../components/HomeArticle";
import Svg from "../components/Svg";

const Techniques = () => {
  return (
    <>
      <header>
        <div className="md-12 relative bg-lightPink-400 pt-20 sm:pt-20 lg:pt-0 ">
          <Svg />
        </div>
        <div
          className="absolute top-12 flex items-center justify-center gap-0 sm:top-16 sm:gap-4"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <div className="pl-4 sm:pl-0">
            <h1 className="-mt-8 text-xl font-extralight tracking-wide sm:text-4xl">
              How they are made
            </h1>
            <p className=" mt-4 text-sm  font-light sm:text-base sm:font-normal">
              Explore the techniques behind our handcrafted pieces
            </p>
          </div>
          <div className="relative h-48 w-72 sm:h-56 sm:w-80">
            <Image
              src={bg}
              fill
              alt="background"
              className="opacity-60"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </header>
      <Container classes="pb-24 pt-24 lg:px-8 lg:w-full xl:max-w-[1200px] md:w-full md:px-8 w-full px-2 mb-40">
        <div className="mb-40">
          <HomeArticle />
        </div>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {techniques.map((technique) => (
            <article
              key={technique.id}
              className=" overflow-hidden rounded-xl border duration-300 ease-in-out hover:shadow-lg"
            >
              <div className="relative p-0 sm:p-0 xs:p-8">
                <Image
                  src={technique.mainImage}
                  alt={technique.name}
                  className="w-full"
                  style={{ maxHeight: "300px" }}
                />
              </div>
              <section className="p-5">
                <Link href={`/techniques/${technique.id}`} className="block">
                  <h4 className="mb-2 font-bold hover:underline">
                    {technique.name}
                  </h4>{" "}
                </Link>

                <p className="font-light">{technique.title}</p>
              </section>
            </article>
          ))}
        </section>
      </Container>
      <FooterCTA />
    </>
  );
};
export default Techniques;
