import Footer from '@/app/components/footer/Footer';
import Favorites from './favorites/Favorites';
import { Level } from '@/app/utils/types';

const FavoritesPage = () => {
  return (
    <>
      <Favorites />
      <Footer level={Level.two} />
    </>
  );
};

export default FavoritesPage;
