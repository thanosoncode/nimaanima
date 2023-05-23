import Image from "next/image";
import t1 from "../../public/sketches/t1.jpg";
import t2 from "../../public/sketches/t2.jpg";
import t3 from "../../public/sketches/t3.jpg";
import t4 from "../../public/sketches/t4.jpg";
import LightPinkWave from "../components/LightPinkWave";

const Header = () => {
  return (
    <header className="relative mb-28 bg-lightPink-400">
      <div className="absolute inset-0  top-12 z-10 flex  h-full w-full items-center justify-center gap-12 py-4">
        <p className="text-center text-xl font-light leading-normal sm:text-2xl">
          Explore the techniques <br /> behind our handcrafted pieces
        </p>
        <div className="flex gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-full">
            <Image src={t1} alt="" fill />
          </div>
          <div className="relative h-20 w-20 overflow-hidden rounded-full">
            <Image src={t2} alt="" fill />
          </div>

          <div className="relative h-20 w-20 overflow-hidden rounded-full">
            <Image src={t4} alt="" fill />
          </div>
          <div className="relative h-20 w-20 overflow-hidden rounded-full">
            <Image src={t3} alt="" fill />
          </div>
        </div>
      </div>
      <div className="bg-lightPink-400 pt-6">
        <LightPinkWave />
      </div>
    </header>
  );
};
export default Header;
