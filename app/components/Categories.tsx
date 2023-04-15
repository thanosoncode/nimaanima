import Image from "next/image";
import category1 from "../../assets/category1.jpg";
import category2 from "../../assets/category2.jpg";
import category3 from "../../assets/category3.jpg";
import category4 from "../../assets/category4.jpg";

const Categories = () => {
  const categories = [
    { name: "category 1", image: category1 },
    { name: "category 2", image: category2 },
    { name: "category 3", image: category3 },
    { name: "category 4", image: category4 },
  ];
  return (
    <section>
      <h4 className="py-4 text-3xl">Shop our awesome gift categories</h4>
      <div className="flex gap-4">
        {categories.map((category) => (
          <div
            className="border-gray w-80 overflow-hidden rounded-xl border hover:shadow-md"
            key={category.name}
          >
            <div className="h-60 w-80">
              <Image
                src={category.image}
                alt="category-item-1"
                width={320}
                height={240}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="p-4 text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Categories;
