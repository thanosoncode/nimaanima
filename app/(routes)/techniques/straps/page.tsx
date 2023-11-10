import header from '../../../../public/assets/techniques/straps/straps-header.webp';
import supplies from '../../../../public/assets/techniques/straps/straps-supplies.webp';
import holes from '../../../../public/assets/techniques/straps/straps-card-holes.webp';
import warp from '../../../../public/assets/techniques/straps/straps-warp.webp';
import shuttle from '../../../../public/assets/techniques/straps/straps-shuttle.webp';
import begin from '../../../../public/assets/techniques/straps/straps-begin-weaving.webp';
import results from '../../../../public/assets/techniques/straps/straps-results.webp';
import { getCategoryProducts } from '@/lib/products';
import { Product } from '@prisma/client';
import { TechniqueData } from '@/app/utils/types';
import Technique from '../technique/Technique';

const Straps = async () => {
  const products = (await getCategoryProducts('Straps')) as Product[];

  const strapsData: TechniqueData = {
    header: {
      title: 'Card woven guitar straps',
      image: {
        src: header,
        alt: 'Card woven guitar straps',
      },
    },
    steps: [
      {
        info: {
          title: 'What we use',
          text: 'To create an table weaving guitar straps, we use playing cards, a hole punch, permanent marker, size 10 crochet thread scissors, and an improvised a loom with clamps or a belt.',
        },
        image: {
          src: supplies,
          alt: 'supplies',
        },
      },

      {
        info: {
          title: 'Preparing our Cards',
          text: 'After creating the cards, we warp the loom by securing dowels or fixtures for a clamped setup. We cut threads and calculate zigzags for loom weaving or measure for clamped setups. Follow the pattern, cut four matching threads, and loop them through the card in an S or Z pattern',
        },
        image: {
          src: holes,
          alt: 'holes',
        },
      },
      {
        info: {
          title: 'Warping our Loom',
          text: 'After creating the cards, we warp the loom by securing dowels or fixtures for a clamped setup. We cut threads and calculate zigzags for loom weaving or measure for clamped setups. Follow the pattern, cut four matching threads, and loop them through the card in an S or Z pattern',
        },
        image: {
          src: warp,
          alt: 'warp',
        },
      },
      {
        info: {
          title: 'Threading Your Shuttle',
          text: '  We use a wrapping shuttle loading it with weft yarn and pass it through the shed, wrapping the yarn around the shuttle s outer edge. Move the shuttle back and forth, beating down the weft periodically for even tension and weaving.',
        },
        image: {
          src: shuttle,
          alt: 'shuttle',
        },
      },
      {
        info: {
          title: 'Begin weaving',
          text: '  We prep 34 cards for this pattern with a hole punch and sharpie. Number them 1-34, centering each on the edges. We unch four holes, leaving 3/4" space from corners. We abel holes A-D clockwise from the upper left corner.',
        },
        image: {
          src: begin,
          alt: 'begin weaving',
        },
      },
      {
        info: {
          title: 'Finishing the strap',
          text: 'We continue this weaving process until we reach your desired length.',
        },
        image: {
          src: results,
          alt: 'Finishing the strap',
        },
      },
    ],
    footer: {
      title: ' Custom Crafted Treasures',
      text: 'Each guitar strap we create is unique, lovingly handcrafted with care and attention to detail. No two dolls are alike, making each one as special as the person who adopts it.',
    },
    rowCarousel: {
      title: 'Check out our card woven guitar straps collection',
      products: products,
    },
  };

  return <Technique {...strapsData} />;
};

export default Straps;
