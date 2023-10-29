'use client';

import Image from 'next/image';
import { useAppDispatch, useAppState } from '../../context/context';
import Container from '../../components/container/Container';
import Link from 'next/link';

const Cart = () => {
  const { cartItems } = useAppState();
  const appDispatch = useAppDispatch();

  const total = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemoveItem = (id: string) =>
    appDispatch({ type: 'REMOVE_ITEM', id });

  return (
    <Container classes='lg:px-8 xl:px-16 lg:w-full xl:max-w-[1200px] md:w-full md:px-8 w-full px-2 mb-20'>
      <div className=''>
        {cartItems.length > 0 ? (
          <h4 className='py-4 sm:py-8 text-3xl font-thin'>
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in
            your cart.
          </h4>
        ) : (
          <h4 className='py-4 sm:py-8 text-3xl font-thin'>
            No items in your cart yet.
          </h4>
        )}
        {cartItems.length > 0 ? (
          <div className='flex flex-col  justify-between gap-10 lg:flex-row '>
            <div className='flex flex-col gap-8'>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className=' rounded-xl max-w-[600px] border border-neutral-300 p-2 sm:p-3 shadow-cart'
                >
                  <div className='flex gap-2 sm:gap-6  w-full'>
                    <div className='relative h-32 w-36 sm:shrink shrink-0 sm:h-52 sm:w-60  overflow-hidden rounded-xl '>
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div className='flex flex-col justify-between'>
                      <div>
                        <div className='text-neutral-700'>
                          <Link
                            href={`/products/${item.id}`}
                            className='text-neutral-600'
                          >
                            {item.name}
                          </Link>
                        </div>
                        <div className=''>€ {item.price}.00</div>
                      </div>
                      <div className='flex gap-4 md:mb-0 mb-4'>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className='block w-min rounded-full bg-white  font-medium text-sm duration-200 ease-in-out hover:bg-neutral-100'
                        >
                          Remove
                        </button>
                        <button className='block w-min whitespace-nowrap rounded-full font-medium bg-white  text-sm duration-200 ease-in-out hover:bg-neutral-100'>
                          Save for later
                        </button>
                      </div>
                      <div className='hidden sm:flex gap-2 items-start'>
                        <input
                          type='checkbox'
                          id='gift'
                          className='block mt-1.5 bg-red-500'
                          onChange={(e) =>
                            appDispatch({
                              type: 'SET_IS_GIFT',
                              isGift: e.target.checked,
                            })
                          }
                        />
                        <label htmlFor='gift' className='flex flex-col'>
                          <span>This package is a gift</span>
                          <span className='text-sm'>
                            Prices will not be show in the package slip
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='flex sm:hidden gap-2 items-start mt-2'>
                    <input type='checkbox' id='gift' className='block mt-1.5' />
                    <label htmlFor='gift' className='flex flex-col'>
                      <span>This package is a gift</span>
                      <span className='text-sm'>
                        Prices will not be show in the package slip
                      </span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <div className='md:px-0 p-4 flex w-full  max-w-[400px] flex-col items-center sm:mt-0 '>
              <div className='flex w-full flex-col gap-6 px-2'>
                <div className='flex justify-between'>
                  <div className='font-medium tracking-wide'>
                    Item&#40;s&#41; total
                  </div>
                  <div className=''>€ {total}</div>
                </div>
                <div className='flex justify-between border-b border-neutral-200 pb-2'>
                  <div className='tracking-wide'>Shipping</div>
                  <div className=''>€ 3.00</div>
                </div>
                <div className='flex justify-between'>
                  <div className='font-medium tracking-wide'>
                    Total &#40;{cartItems.length}item&#41;
                  </div>
                  <div className=''>€ {total + 3}</div>
                </div>
              </div>
              <Link
                href='/cart/details'
                className='mt-14 block w-min whitespace-nowrap rounded-full bg-neutral-800 px-5 py-2 text-center text-sm tracking-wider text-white duration-200 ease-out hover:scale-105'
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </Container>
  );
};
export default Cart;
