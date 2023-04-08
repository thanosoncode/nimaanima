import Container from "@/app/components/Container";
import { techniques } from "@/app/data/techniques";
import Image from "next/image";

const SingleTechnique = ({ params: { id } }: { params: { id: string } }) => {
  const technique = techniques.find((technique) => technique.id === Number(id));

  if (!technique) {
    return <Container>{<h4>Sorry, we couldn't find that one.</h4>}</Container>;
  }

  return (
    <Container>
      <header>
        <h1 className="text-4xl">{technique.name}</h1>
        <h4>{technique.title}</h4>
      </header>
      <main>
        <Image src={technique.mainImage} alt="main-image" />
        <article>
          <p>{technique.intro}</p>
          {technique.parts.map((part) => (
            <div>
              <Image src={part.image} alt={`image-${technique.id}`} />
              <section>
                {part.texts.map((text) => (
                  <p>{text?.text}</p>
                ))}
              </section>
            </div>
          ))}
        </article>
      </main>
    </Container>
  );
};
export default SingleTechnique;
