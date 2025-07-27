import ProductCardList from "@/components/product_card_list/page";
import products from "@/app/products";
import { notFound } from "next/navigation";
import PageHeader from "@/components/page_header/page";
import { formatLink, toLinkFormat } from "@/helpers/helpers";
import { getProductByBrand } from "@/repository/repository";

export const generateMetadata = async ({ params }) => {
  const { brand } = params;

  const brandProduct = getProductByBrand(brand);

  return {
    title: `${brandProduct.brand}`,
    description: `Product for "${brandProduct.brand}" brand`,
  };
};

export default function BrandProductsGrid({ params }) {
  const brandProducts = getProductByBrand(params.brand);

  if (!brandProducts) {
    return notFound();
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
      <PageHeader title={brandProducts.brand} />

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
        {brandProducts.models.map((el) => (
          <ProductCardList
            brand={brandProducts.brand}
            name={el.name}
            images={el.images}
            price={el.price}
            currency={el.currency}
            key={brandProducts.brand + el.name}
            detailUrl={formatLink("/#brand#/#name#", {
              brand: brandProducts.brand,
              name: el.name,
            })}
            brandUrl={formatLink("/#brand#", { brand: brandProducts.brand })}
          />
        ))}
      </div>
    </div>
  );
}
