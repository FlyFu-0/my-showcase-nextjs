import products from "@/app/products";

const BrandsGrid = () => {
  // const brands = products.map((brand) => brand.brand)

  const brands = [
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
    "Nike",
    "New Balance",
  ];

  return (
    <div>
      <article className="flex wrap gap-4">
        {brands.map((name, i) => (
          <div key={i} className="flex items-center shadow justify-center text-center rounded-xl px-16 py-3">
            <span>{name}</span>
          </div>
        ))}
      </article>
    </div>
  );
};

export default BrandsGrid;
