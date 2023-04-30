import Image from "next/image";
import Link from "next/link";
import { techniques } from ".././data/techniques";

const HomeArticle = () => {
  return (
    <section className="rounded-xl border border-neutral-400">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(250px, 1fr",
          gridAutoRows: "minmax(200px, 300px)",
        }}
      >
        <article>
          <Link
            href="/techniques/3"
            className="flex flex-col items-center gap-6 p-8"
          >
            <h4 className="text-xl">Learn more about the techniques we use</h4>
            <h2 className="border-b-4 border-transparent px-2 text-center text-4xl hover:border-black">
              {techniques[2].name}
            </h2>
            <p className="text-center">{techniques[2].title}</p>

            <button className="rounded-full bg-black px-5 py-2 text-white duration-200 ease-out hover:scale-105">
              read on
            </button>
          </Link>
        </article>
        <div className="relative  flex-shrink-0 overflow-hidden rounded-xl rounded-tl-none rounded-bl-none">
          <Image
            src={techniques[2].mainImage}
            alt="about-1"
            fill
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default HomeArticle;
