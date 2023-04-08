import Link from "next/link";
import Container from "../components/Container";
import { techniques } from "../data/techniques";
import Image from "next/image";
import Contact from "../components/Contact";

const Techniques = () => {
  return (
    <>
      <Container>
        <header className=" pt-8 pb-16">
          <h1 className="text-3xl pb-4">Techniques</h1>
          <p>Learna all about the techniques we use for our products</p>
        </header>
        <main
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, 500px)",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {techniques.map((technique) => (
            <article
              key={technique.id}
              className="rounded-xl border border-neutral-100 overflow-hidden"
            >
              <Image src={technique.mainImage} alt={technique.name} />
              <section className="p-4">
                <Link href={`/techniques/${technique.id}`}>
                  <h4 className="text-xl font-bold">{technique.title}</h4>
                  <p className="text-base font-light">{technique.title}</p>
                </Link>
              </section>
            </article>
          ))}
        </main>
      </Container>
      <Contact />
    </>
  );
};
export default Techniques;
