import { getCategoryProducts } from '@/lib/products';
import { Product } from '@prisma/client';
import { TechniqueData } from '@/app/utils/types';
import Technique from '../technique/Technique';
import header from '../../../../public/assets/techniques/tapestry/header-tapestry.jpeg';
import whatWeUse from '../../../../public/assets/techniques/tapestry/what-we-use.jpeg';
import warping from '../../../../public/assets/techniques/tapestry/warping.jpeg';
import ryaKnots from '../../../../public/assets/techniques/tapestry/knotting-a-knot.jpeg';
import soumak from '../../../../public/assets/techniques/tapestry/knotting-a-sumak.jpeg';
import tabby from '../../../../public/assets/techniques/tapestry/single-tabby-weaving.jpeg';
import finishing from '../../../../public/assets/techniques/tapestry/finishing.webp';

const Tapestry = async () => {
  const products = (await getCategoryProducts('Tapestry')) as Product[];

  const tapestryData: TechniqueData = {
    header: {
      title: 'Wall hanging woven tapestry',
      image: {
        src: header,
        alt: 'Wall hanging woven tapestry',
      },
    },
    steps: [
      {
        info: {
          title: 'What we use',
          text: 'Our own made from wood loom, strong cotton tapestry warp or twine, wool fibres, scissors',
        },
        image: {
          src: whatWeUse,
          alt: 'what we use',
        },
      },

      {
        info: {
          title: 'Warping the loom',
          text: 'Warping the loom involves setting up our vertical threads, known as the warp, by carefully stringing them through the loom s frame once our warp is in place, we interlace the horizontal threads, called the weft, through the warp, creating intricate patterns and textures in our woven wall hanging tapestry.',
        },
        image: {
          src: warping,
          alt: 'Warping the loom',
        },
      },
      {
        info: {
          title: 'Knotting a row of rya knots',
          text: 'Knotting rya knots involves securing individual tufts of yarn onto the warp threads. As we tie each knot, the length and density of the yarn contribute to the overall design, resulting in a visually rich and tactile finished piece',
        },
        image: {
          src: ryaKnots,
          alt: 'Knotting a row of rya knots',
        },
      },
      {
        info: {
          title: 'Knotting a soumak',
          text: 'Knotting soumak involves wrapping supplementary weft yarn around groups of warp threads in a distinctive pattern, adding texture and depth to our woven wall hanging tapestry. ',
        },
        image: {
          src: soumak,
          alt: 'Knotting a soumak',
        },
      },
      {
        info: {
          title: 'Single tabby weaving',
          text: 'Weaving in a single tabby weave involves passing the weft thread over and under individual warp threads, creating a simple, tight, and even fabric for our woven wall hanging tapestry. ',
        },
        image: {
          src: tabby,
          alt: 'Single tabby weaving',
        },
      },
      {
        info: {
          title: 'Finishing out wall hanging',
          text: 'Finishing our wall hanging involves carefully inspecting the woven fabric for any loose threads or irregularities and addressing them. Once satisfied, we trim excess warp threads, add hanging mechanisms, and apply a protective treatment',
        },
        image: {
          src: finishing,
          alt: 'Finishing out wall hanging',
        },
      },
    ],
    footer: {
      title: ' Custom Crafted Treasures',
      text: 'Each woven wall hanging we create is unique, lovingly handcrafted with care and attention to detail. No two tapestry are alike, making each one as special as the person who adopts it.',
    },
    rowCarousel: {
      title: 'Check out our woven wall hanging collection',
      products: products,
    },
  };

  return <Technique {...tapestryData} />;
};

export default Tapestry;
