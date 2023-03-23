import { Product } from "../utils/models";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { BiMinus, BiPlus } from "react-icons/bi";

interface Modal {
  open: boolean;
  product: Product | null;
  onClose: () => void;
}

const Modal: React.FC<Modal> = ({ open, product, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-red-400 flex justify-center items-center  ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="p-4 bg-white w-3/4">
        <button onClick={onClose} className="float-right text-lg">
          <AiOutlineClose />
        </button>
        {product ? (
          <div className="flex gap-8">
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <div className="flex flex-col gap-8 pt-8">
                <h4 className="text-3xl">{product.name}</h4>
                <p className="mb-12"> {product.description}</p>
                <p className="text-3xl">{product.price} €</p>
              </div>
              <div className="flex gap-8  mt-8 flex-col">
                <div className="flex gap-1">
                  <div className="flex justify-center items-center text-lg bg-gray-300 px-2 py-1 cursor-pointer transition-all ease-in-out p-4 hover:bg-gray-200">
                    <BiMinus />
                  </div>
                  <p className="text-center text-lg bg-gray-300 px-6">0</p>
                  <div className="flex justify-center items-center text-lg bg-gray-300 px-2 py-1 cursor-pointer transition-all ease-in-out p-4 hover:bg-gray-200">
                    <BiPlus />
                  </div>
                </div>
                <button className="transition-all ease-in-out p-4 bg-gray-400 rounded hover:bg-gray-200">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Modal;
