import Image from "next/image";
import Link from "next/link";
import { techniques } from ".././data/techniques";

const HomeArticle = () => {
  return (
    <div className="flex">
      <article className="w-1/2">
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
      <div className="relative  max-h-[300px] w-1/2 flex-shrink-0 overflow-hidden rounded-xl">
        <Image
          src={techniques[2].mainImage}
          alt="about-1"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};
export default HomeArticle;
