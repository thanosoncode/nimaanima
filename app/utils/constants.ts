import dolls from "../../public/assets/categories/category-dolls.webp";
import straps from "../../public/assets/categories/category-straps.webp";
import tablet from "../../public/assets/categories/category-tablet.webp";
import tapestry from "../../public/assets/categories/category-tapestry.webp";
import { CategoryItem } from "./types";

export const NAVBAR_HEIGHT = 72;
export const FOOTER_HEIGHT = 230;

export const categories: CategoryItem[] = [
  {
    id: 1,
    name: "Dolls",
    image: dolls,
    pathname: "/dolls",
    title: "Adorable Amigurumi Creations",
    subtitle:
      "Discover the Charm of Handcrafted Amigurumi Dolls. Each Stitch Tells a Story, Bringing Whimsy and Personality to Life.",
  },
  {
    id: 2,
    name: "Straps",
    image: straps,
    pathname: "straps",
    title: "Rhythmic Threads for Your Melodies",
    subtitle:
      "Elevate Your Style with Artisanal Card Woven Guitar Straps. Handwoven with Precision, These Straps Combine Aesthetics with Durability for a Unique Musical Experience.",
  },
  {
    id: 3,
    name: "Tapestry",
    image: tapestry,
    pathname: "tapestry",
    title: "Woven Tales on the Loom",
    subtitle:
      "Explore the Intricate Art of Handwoven Loom Tapestry. Every Piece is a Canvas, Woven with Passion and Expertise, Adding Timeless Elegance to Your Space.",
  },
  {
    id: 4,
    name: "Bracelets",
    image: tablet,
    pathname: "bracelets",
    title: "Wearable Art for Every Occasion",
    subtitle:
      "Experience the Craftsmanship in Tablet-Woven Bracelets. These Artistic Creations Wrap Your Wrist in Beauty, Infused with Carefully Crafted Patterns and Unique Designs",
  },
];
