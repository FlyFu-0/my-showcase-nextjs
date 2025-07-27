import products from "@/app/products";
import BrandCard from "@/components/brand_card/page";
import { notFound } from "next/navigation";

const BrandsGrid = () => {
  const brands = products.map((brand) => brand.brand);

  if (!brands) {
    return notFound();
  }

  return (
    <article className="grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-4 gap-4">
      {brands.map((name, i) => (
        <BrandCard key={i} name={name} />
      ))}
    </article>
  );
};

export default BrandsGrid;
