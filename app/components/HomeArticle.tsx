import Image from "next/image";
import Link from "next/link";
import { techniques } from ".././data/techniques";

const HomeArticle = () => {
  return (
    <section>
      <div className="flex flex-row-reverse items-center justify-center gap-8">
        <div className="h-80 w-96 flex-shrink-0 overflow-hidden rounded-xl">
          <Image
            src={techniques[0].mainImage}
            alt="about-1"
            className="h-full w-full object-cover"
          />
        </div>
        <article className="">
          <Link
            href="/techniques/1"
            className="flex flex-col items-center gap-6 p-14"
          >
            <h4 className="">Learn more about the techniques we use</h4>
            <h2 className="border-b-4 border-transparent px-2 text-center text-4xl hover:border-black">
              {techniques[0].name}
            </h2>
            <p className="text-center">{techniques[0].title}</p>

            <button className="rounded-full bg-black px-5 py-2 text-white duration-200 ease-out hover:scale-105">
              read on
            </button>
          </Link>
        </article>
      </div>
    </section>
  );
};
export default HomeArticle;
