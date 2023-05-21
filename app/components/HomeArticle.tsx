import Image from "next/image";
import Link from "next/link";
import { techniques } from ".././data/techniques";

const HomeArticle = () => {
  return (
    <div className="flex flex-col-reverse gap-4 sm:flex-row">
      <article className="w-full sm:w-1/2">
        <Link
          href="/techniques/3"
          className="flex h-full flex-col items-center justify-center gap-6"
        >
          <h4 className="text-xl">Learn more about the techniques we use</h4>
          <h2 className="border-b-4 border-transparent px-2 text-center text-3xl  hover:border-black">
            {techniques[2].name}
          </h2>
          <p className="text-center">{techniques[2].title}</p>

          <button className="rounded-full bg-black px-5 py-2 text-white duration-200 ease-out hover:scale-105">
            read on
          </button>
        </Link>
      </article>
      <div className="relative  max-h-[320px] w-full flex-shrink-0 overflow-hidden sm:w-1/2 sm:rounded-xl">
        <Image
          src={techniques[2].mainImage}
          alt="about-1"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
export default HomeArticle;
