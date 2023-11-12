import Image from "next/image";
import neckless from "../../../../public/assets/necklace.svg";

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 flex h-48 w-48 items-center justify-center rounded-full bg-neutral-200">
        <div className="relative h-32 w-36">
          <Image alt="neckless" src={neckless} fill />
        </div>
      </div>
      <p className="mb-2 text-xl font-medium">Nothing here yet</p>
      <p className="max-w-[360px] text-center text-lg text-neutral-600">
        These are a few of your favorite things... or they will be, once you
        favorite something.
      </p>
    </div>
  );
};

export default Empty;
