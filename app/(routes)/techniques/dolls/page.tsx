import legs from "../../../../public/assets/techniques/dolls/amiguri-crochet-legs.jpg";
import body1 from "../../../../public/assets/techniques/dolls/amiguri-crochet-doll-body.jpg";
import body2 from "../../../../public/assets/techniques/dolls/amiguri-crochet-doll-body-2.jpg";
import results from "../../../../public/assets/techniques/dolls/amiguri-crochet-dolls-2.jpg";
import materials from "../../../../public/assets/techniques/dolls/amiguri-crochet-doll-materials.jpeg";
import header from "../../../../public/assets/techniques/dolls/dolls-header.webp";
import { getCategoryProducts } from "@/lib/products";
import { Product } from "@prisma/client";
import Technique from "../technique/Technique";
import { TechniqueData } from "@/app/utils/types";

const Dolls = async () => {
  const products = (await getCategoryProducts("Dolls")) as Product[];

  const dollsData: TechniqueData = {
    header: {
      title: "Amigurumi crochet dolls",
      image: {
        src: header,
        alt: "Amigurumi crochet dolls",
      },
    },
    steps: [
      {
        info: {
          title: "What we use",
          text: "To create an amigurumi doll, we use yarn, a crochet hook, a yarn needle, and stitch markers. These essential tools, along with our creativity and passion, come together to bring our amigurumi creations to life.",
        },
        image: {
          src: materials,
          alt: "materials",
        },
      },
      {
        info: {
          title: "Creating and joining the dolls legs",
          text: " We crochet the doll from the feet up, creating each foot with a magic ring and working in rows of increases and single crochets.After stuffing the foot, we continue with the leg, making a cylinder with 18 rows of 8 single crochets. We add stuffing every six rounds and leave a yarn tail at the end. Once both legs are done, we join them together, using a few single crochets, six chain stitches, and working around the second leg.",
        },
        image: {
          src: legs,
          alt: "legs",
        },
      },
      {
        info: {
          title: "Crochet the Torso and Head",
          text: " We work from the connected set of legs, creating the torso by stitching around the fabric perimeter with a series of increases and decreases to form the body s natural curves. As we progress,  we add fiberfill stuffing. We experiment with proportions to achieve our desired look, whether it s a realistic or cute kawaii style. We reinforce the neck with cotton swabs for structure, stuff the head with fiberfill, and then embroider facial features like a nose, smile, and eyes.",
        },
        image: {
          src: body1,
          alt: "body1",
        },
      },
      {
        info: {
          title: "Adding arms",
          text: "Each of the arms also begins with a magic ring. Then, we increase slightly and then add 12 rows of 5 single crochets. We end up with a long, cylindrical arm. Once we crochet both arms, we attach them using yarn and a yarn needle.",
        },
        image: {
          src: body2,
          alt: "body2",
        },
      },
      {
        info: {
          title: "Customizing",
          text: "Now is the fun part! With the foundation of our amigurumi doll complete, we can focus on customizing it. What type and color of hair will it have? What will it wear? Will it carry a purse or wear flowers in its hair? It s up to the imagination.",
        },
        image: {
          src: results,
          alt: "results",
        },
      },
    ],
    footer: {
      title: " Custom Crafted Treasures",
      text: "Each amigurumi doll we create is unique, lovingly handcrafted with care and attention to detail. No two dolls are alike, making each one as special as the person who adopts it.",
    },
    rowCarousel: {
      title: "Check out our amigurumi dolls collection",
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
