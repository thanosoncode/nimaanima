import Link from "next/link";
import Container from "../components/Container";
import { techniques } from "../data/techniques";
import Image from "next/image";
import FooterCTA from "../components/FooterCTA";

const Techniques = () => {
  return (
    <>
      <Container classes="pb-40">
        <header className=" pt-8 pb-16">
          <h1 className="pb-4 text-3xl">Techniques</h1>
          <p>Learna all about the techniques we use for our products</p>
        </header>
        <main
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 0.2fr))",
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
