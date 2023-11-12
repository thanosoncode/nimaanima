import Link from "next/link";
import ShapeTwo from "../../svg/ShapeTwo";
import ShapeThree from "../../svg/ShapeThree";

const FooterLevelOne = () => {
  return (
    <div>
      <ShapeTwo fill="#D7E6F5" />
      <div className="bg-someBlue-400">
        <div className="bg-LightBlueWave flex flex-col items-center justify-center  gap-4 pt-2 pb-0 sm:pb-2 lg:pb-8">
          <h4 className="px-8 text-center font-medium">
            Ask us anything or make a special order &ndash; we&apos;re here to
            help!
          </h4>
          <button className="rounded-full border border-neutral-400 bg-white py-2 px-5 font-semibold duration-200 ease-in-out hover:scale-105">
            <Link href="/contact">Get in touch!</Link>
          </button>
        </div>
      </div>
      <div className="relative h-10 w-full bg-someBlue-400 ">
        <div className="absolute inset-0 rotate-180">
          <ShapeThree fill="#4D6BC6" />
        </div>
      </div>
      <div className="flex   justify-center bg-someBlue-500 pb-2">
        <span className="text-center text-white  ">
          Every product is 100% handmade.
        </span>
      </div>
    </div>
  );
};
export default FooterLevelOne;
