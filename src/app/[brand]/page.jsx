import SectionHeader from "@/components/section_header/page";
import ProductCardList from "@/components/product_card_list/page";
import products from "@/app/products";
import { notFound } from "next/navigation";
import PageHeader from "@/components/page_header/page";
import { formatLink } from "@/helpers/helpers";

export default function BrandProductsGrid({ params }) {
  const brandProducts = products.find(
    (prod) =>
      prod.brand.toLocaleLowerCase().replace(/ /g, '-') === params.brand.toLocaleLowerCase()
  );

  if (!brandProducts) {
    return notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <PageHeader title={brandProducts.brand} />

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {brandProducts.models.map((el) => (
            <ProductCardList
              brand={brandProducts.brand}
              name={el.name}
              images={el.images}
              price={el.price}
              currency={el.currency}
              key={brandProducts.brand + el.name}
              detailUrl={`/products/${formatLink(brandProducts.brand)}/${formatLink(el.name)}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
