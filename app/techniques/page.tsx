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
        <main className="flex flex-wrap gap-12">
          {techniques.map((technique) => (
            <article
              key={technique.id}
              className="h-[620px] w-96 overflow-hidden rounded-xl border hover:shadow-md"
            >
              <div className="relative h-3/5">
                <Image src={technique.mainImage} alt={technique.name} fill />
              </div>
              <section className="p-3">
                <Link href={`/techniques/${technique.id}`}>
                  <h4 className="mb-4 text-xl font-bold">{technique.title}</h4>
                  <p className="text-base font-light">{technique.title}</p>
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
