import Link from "next/link";
import Container from "../components/Container";
import { techniques } from "../data/techniques";
import Image from "next/image";
import FooterCTA from "../components/FooterCTA";

const Techniques = () => {
  return (
    <>
      <header className="bg-lightPink-400 pt-14 pb-10">
        <Container>
          <h1 className="pb-2 text-4xl font-extralight">How they are made</h1>
          <p>Explore the techniques behind our handcrafted pieces</p>
        </Container>
      </header>
      <Container classes="py-24">
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
