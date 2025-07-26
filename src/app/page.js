import SectionHeader from "@/components/section_header/page";
import ProductCardList from "@/components/product_card_list/page";
import { formatLink } from "@/helpers/helpers";
import Link from "next/link";
import products from "./products";

export default function ProductsGrid() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          All Sneakers
        </h2>

        {products.map((product) => (
          <div className="mt-3 mb-8" key={product.brand}>
            <Link href={`/products/${product.brand.toLocaleLowerCase().replace(" ", "-")}`}>
              <SectionHeader title={product.brand} />
            </Link>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {product.models.map((el) => (
                <ProductCardList
                  brand={product.brand}
                  name={el.name}
                  images={el.images}
                  price={el.price}
                  currency={el.currency}
                  key={product.brand + el.name}
                  detailUrl={formatLink('/products/#brand#/#name#', { brand: product.brand, name: el.name })}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
