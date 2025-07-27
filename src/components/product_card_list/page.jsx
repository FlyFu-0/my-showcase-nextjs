import { priceFormat } from "@/helpers/helpers";
import Link from "next/link";

const ProductCardList = ({
  brand,
  name,
  images,
  price,
  currency,
  detailUrl = "#",
}) => {
  return (
    <div className="group relative">
      <img
        alt={name}
        src={images[0]}
        className="aspect-square w-full rounded-md bg-white object-cover group-hover:opacity-75 lg:aspect-auto lg:h-70"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={detailUrl}>
              <span>{name}</span>
              <span className="block text-gray-400 italic">{brand}</span>
              <span aria-hidden="true" className="absolute inset-0" />
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {priceFormat(price, currency)}
        </p>
      </div>
    </div>
  );
};

export default ProductCardList;
