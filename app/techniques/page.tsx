import Link from "next/link";
import Container from "../components/Container";
import { techniques } from "../data/techniques";
import Image from "next/image";
import FooterCTA from "../components/FooterCTA";
import bg from "../../public/assets/howmade-bg-no-b.png";

const Techniques = () => {
  return (
    <>
      <header className="bg-lightPink-400 py-2">
        <Container classes="flex gap-18 items-center justify-center">
          <div>
            <h1 className="-mt-8 text-4xl font-extralight">
              How they are made
            </h1>
            <p className="mt-4">
              Explore the techniques behind our handcrafted pieces
            </p>
          </div>
          <div
            style={{ width: "380px", height: "220px", position: "relative" }}
          >
            <Image
              src={bg}
              fill
              alt="background"
              className="opacity-60"
              style={{ objectFit: "contain" }}
            />
          </div>
        </Container>
      </header>
      <Container classes="py-24 lg:px-8 lg:w-full xl:max-w-[1400px] md:w-full md:px-8 w-full px-2">
        <main
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 0.2fr))",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {techniques.map((technique) => (
            <article
              key={technique.id}
              className="h-full w-full overflow-hidden rounded-xl border hover:shadow-md"
            >
              <div className="relative  w-full">
                <Image
                  src={technique.mainImage}
                  alt={technique.name}
                  style={{ maxHeight: "200px" }}
                />
              </div>
              <section className="p-3">
                <Link href={`/techniques/${technique.id}`} className="block">
                  <h4 className="mb-2 font-bold">{technique.name}</h4>
                  <p className="font-light">{technique.title}</p>
                </Link>
              </section>
            </article>
          ))}
        </main>
      </Container>
      <FooterCTA />
    </>
  );
};
export default Techniques;
