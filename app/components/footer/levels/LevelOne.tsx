import ShapeThree from '../../svg/ShapeThree';

const LevelOne = () => {
  return (
    <div>
      <div className="relative h-10 w-full bg-white ">
        <div className="absolute inset-0 rotate-180">
          <ShapeThree fill="#4D6BC6" />
        </div>
      </div>
      <div className="flex justify-center bg-someBlue-500 pb-2">
        <span className="text-center text-white  ">
          Every product is 100% handmade.
        </span>
      </div>
    </div>
  );
};
export default LevelOne;
