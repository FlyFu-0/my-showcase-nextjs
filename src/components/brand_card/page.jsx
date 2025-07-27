import { formatLink } from "@/helpers/helpers";
import Link from "next/link";

const BrandCard = ({ name }) => {
  return (
    <Link
      href={formatLink("/#brand#", { brand: name })}
      className="flex items-center shadow-md justify-center text-center rounded-xl py-3 bg-white transition-all hover:scale-105 hover:shadow-xl"
    >
      <span>{name}</span>
    </Link>
  );
};

export default BrandCard;
