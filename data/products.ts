import headphones from "../public/assets/headphones.jpg";
import car from "../public/assets/car.jpg";
import camera from "../public/assets/camera.jpg";
import sunglasses from "../public/assets/sunglasses.jpg";
import watch from "../public/assets/watch.jpg";
import smartwatch from "../public/assets/smartwatch.jpg";
import { Product } from "@/app/utils/models";

export const productsData: Product[] = [
  {
    id: 1,
    name: "headphones",
    price: 30,
    image: headphones,
    description:
      "The reliable quartz movement ensures accurate timekeeping, while water resistance up to 50 meters makes it perfect for any activity. Order now and elevate your style with the XYZ Watch.",
  },
  {
    id: 2,
    name: "car",
    price: 87,
    image: car,
    description:
      "Introducing the beautifully crafted XYZ Vintage Car, a must-have piece for any collector's showcase or home decor. This stunning model car is meticulously designed with intricate detailing and high-quality materials. Order now and add a touch of classic style to your home decor.",
  },
  {
    id: 3,
    name: "camera",
    price: 56,
    image: camera,
    description:
      "The ABC Camera captures stunning photos and videos with ease. With a high-resolution image sensor and fast autofocus system, you can expect clear and sharp results every time. The compact design makes it easy to take on-the-go, while the intuitive controls and touch screen make it user-friendly. Plus, with built-in Wi-Fi, sharing your favorite moments has never been easier. Order now and capture memories like never before with the ABC Camera.",
  },
  {
    id: 4,
    name: "sunglasses",
    price: 99,
    image: sunglasses,
    description:
      "Stay stylish and protected with the ABC Sunglasses. These sleek and functional sunglasses feature high-quality polarized lenses that reduce glare and provide crystal-clear vision. Order now and elevate your look while keeping your eyes safe from harmful UV rays.",
  },
  {
    id: 5,
    name: "watch",
    price: 59,
    image: watch,
    description:
      "The reliable quartz movement ensures accurate timekeeping, while water resistance up to 50 meters makes it perfect for any activity. Order now and elevate your style with the XYZ Watch.",
  },
  {
    id: 6,
    name: "smartwatch",
    price: 123,
    image: smartwatch,
    description:
      "The ABC Smartwatch is the perfect companion for your active lifestyle. With advanced features such as heart rate monitoring, GPS tracking, and a variety of fitness apps, this watch helps you stay on top of your health and fitness goals.",
  },
];
