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
          <h1 className="pb-4 text-3xl">Techniques</h1>
          <p>Learna all about the techniques we use for our products</p>
        </header>
        <main
          className="align grid justify-between gap-x-5 gap-y-10"
          style={{
            gridTemplateColumns: "repeat(auto-fit, 384px)",
          }}
        >
          {techniques.map((technique) => (
            <article
              key={technique.id}
              className="overflow-hidden rounded-xl border hover:shadow-md"
            >
              <div className="h-80 w-96">
                <Image
                  src={technique.mainImage}
                  alt={technique.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <section className="p-6">
                <Link href={`/techniques/${technique.id}`}>
                  <h4 className="mb-4 text-xl font-bold">{technique.title}</h4>
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
