import Footer from '@/app/components/footer/Footer';
import Cart from './cart/Cart';
import { Level } from '@/app/utils/types';

const CartPage = () => {
  return (
    <>
      <Cart />
      <Footer level={Level.one} />
    </>
  );
};

export default CartPage;
