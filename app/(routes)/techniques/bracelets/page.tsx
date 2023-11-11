import header from '../../../../public/assets/techniques/bracelets/header-bracelets.jpg';
import supplies from '../../../../public/assets/techniques/bracelets/supplies-bracelets.webp';
import preparing from '../../../../public/assets/techniques/bracelets/preparing-the-loom.webp';
import weaving from '../../../../public/assets/techniques/bracelets/weaving.webp';
import continueWeaving from '../../../../public/assets/techniques/bracelets/weave-trim.webp';
import results from '../../../../public/assets/techniques/bracelets/results.webp';

import { getCategoryProducts } from '@/lib/products';
import { Product } from '@prisma/client';
import Technique from '../technique/Technique';
import { TechniqueData } from '@/app/utils/types';

const Dolls = async () => {
  const products = (await getCategoryProducts('Bracelets')) as Product[];

  const dollsData: TechniqueData = {
    header: {
      title: 'Woven bracelets',
      image: {
        src: header,
        alt: 'Woven bracelets',
      },
    },
    steps: [
      {
        info: {
          title: 'Supplies',
          text: 'To create an woven bracelets, we just use embroidery Floss / Thread, a embroidery needle, a Loom needle, scissors and tape. These essential tools, along with our creativity and passion, come together to bring our woven bracelets creations to life.',
        },
        image: {
          src: supplies,
          alt: 'supplies',
        },
      },
      {
        info: {
          title: 'Preparing the loom',
          text: 'We set up the loom by securing it to a stable surface and threading the warp threads vertically, ensuring even tension. Once the warp threads are in place, we begin weaving by passing the weft threads horizontally through the warp, creating the base of the bracelet.',
        },
        image: {
          src: preparing,
          alt: 'Preparing the loom',
        },
      },
      {
        info: {
          title: 'Start weaving',
          text: 'Once the loom is warped you are ready to weave. This weaving pattern I show you here is called the tabby or plain weave, it s the most basic type of weaving and creates a strong, beautiful texture. Different weaves create different fabrics',
        },
        image: {
          src: weaving,
          alt: 'weaving',
        },
      },
      {
        info: {
          title: 'Weaving and trimming',
          text: 'Adding a line or shape to your bracelet can make it feel more personal. For this bracelet, we want to add a golden full moon shape. we continue weaving down the bracelet, getting wider with the gold thread as we go until I reach the middle point of the shape',
        },
        image: {
          src: continueWeaving,
          alt: 'continueWeaving',
        },
      },
      {
        info: {
          title: 'Braiding the Remaining Strings to Finish',
          text: 'Now we are ready to braid the warp thread at the bottom end of the bracelet. Finish braiding to the end and knot the braid at the very bottom, trim off any extra thread from the knot.',
        },
        image: {
          src: results,
          alt: 'results',
        },
      },
    ],
    footer: {
      title: 'Custom Crafted Treasures',
      text: 'Each woven bracelet we create is unique, lovingly handcrafted with care and attention to detail. No two bracelets are alike, making each one as special as the person who adopts it.',
    },
    rowCarousel: {
      title: 'Check out our woven bracelets collection',
      products: products,
    },
  };

  return (
    <>
      <Technique {...dollsData} />;
    </>
  );
};

export default Dolls;
