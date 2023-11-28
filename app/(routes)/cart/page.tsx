'use client';

import { useAppState } from '../../context/context';
import Container from '../../components/container/Container';
import ViewFavorites from './viewFavorites/ViewFavorites';
import Summary from './summary/Summary';
import CartItem from './cartItem/CartiItem';
import SavedItems from './savedItems/SavedItems';

const Cart = () => {
  const { cartItems, favorites, saved } = useAppState();

  const showViewFavorites = favorites.length > 0;

  return (
    <Container classes={`${showViewFavorites ? '' : 'mb-20'}`}>
      <div className="flex flex-col items-center px-0 lg:block">
        <div>
          {cartItems.length > 0 ? (
            <h4 className="py-4 text-3xl font-thin sm:py-8">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in
              your cart.
            </h4>
          ) : (
            <div>
              <h4 className="py-8 text-center text-3xl font-thin sm:py-8">
                Your cart is empty.
              </h4>
            </div>
          )}
        </div>
        {cartItems.length > 0 ? (
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start">
            <div className="flex flex-col gap-8">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <Summary cartItems={cartItems} />
          </div>
        ) : null}
      </div>
      {saved.length > 0 ? <SavedItems /> : null}
      <div className="mt-16 mb-8">
        <ViewFavorites favorites={favorites} />
      </div>
    </Container>
  );
};
export default Cart;
