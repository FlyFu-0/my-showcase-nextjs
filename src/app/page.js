import SectionHeader from "@/components/section_header/page";
import ProductCardList from "@/components/product_card_list/page";
import { formatLink } from "@/helpers/helpers";
import Link from "next/link";
import products from "./products";
import PageHeader from "@/components/page_header/page";

export default function ProductsGrid() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <PageHeader title={'All Sneakers'} />

        {products.map((product) => (
          <div className="mt-3 mb-8" key={product.brand}>
            <Link href={formatLink('/#brand#', { brand: product.brand })}>
              <SectionHeader title={product.brand} />
            </Link>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {product.models.map((el) => (
                <ProductCardList
                  brand={product.brand}
                  name={el.name}
                  images={el.images}
                  price={el.price}
                  currency={el.currency}
                  key={product.brand + el.name}
                  detailUrl={formatLink('/#brand#/#name#', { brand: product.brand, name: el.name })}
                  brandUrl={formatLink('/#brand#', { brand: product.brand })}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
