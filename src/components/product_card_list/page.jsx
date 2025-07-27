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
    <Link href={detailUrl}>
      <div className="group">
        <img
          alt={name}
          src={images[0]}
          className="aspect-square w-full rounded-md bg-white object-cover group-hover:opacity-75 lg:aspect-auto lg:h-70"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              {name}
              <span className="block text-gray-400 italic">{brand}</span>
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">
            {priceFormat(price, currency)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCardList;
