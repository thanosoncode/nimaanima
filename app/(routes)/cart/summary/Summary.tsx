'use client';
import { Product } from '@/app/utils/types';

interface SummaryProps {
  cartItems: Product[];
}

const Summary = ({ cartItems }: SummaryProps) => {
  const total = cartItems.reduce((total, item) => total + item.price, 0);

  const proceedToCheckout = async () => {
    const response = await fetch('api/checkout', {
      method: 'POST',
      body: JSON.stringify({ cartItems }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Something went wrong. Try again later');
    }
    const checkoutUrl = await response.json();
    window.location.assign(checkoutUrl);
  };

  return (
    <div className="flex w-full max-w-[400px] flex-col  items-center px-4 sm:mt-0 md:px-0 ">
      <div className="flex w-full flex-col gap-6 px-2">
        <div className="flex justify-between">
          <div className="font-medium tracking-wide">Item&#40;s&#41; total</div>
          <div className="">€ {total}</div>
        </div>
        <div className="flex justify-between border-b border-neutral-200 pb-2">
          <div className="tracking-wide">Shipping</div>
          <div className="">€ 3.00</div>
        </div>
        <div className="flex justify-between">
          <div className="font-medium tracking-wide">
            Total {cartItems.length} item&#40;s&#41;
          </div>
          <div className="">€ {total + 3}</div>
        </div>
      </div>
      <button
        onClick={proceedToCheckout}
        className="mt-14 block w-full whitespace-nowrap rounded-full bg-neutral-800 px-5 py-3 text-center text-sm tracking-wider text-white duration-200 ease-out hover:scale-105"
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default Summary;
