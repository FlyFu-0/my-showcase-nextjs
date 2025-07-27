import { formatLink } from "@/helpers/helpers";
import Link from "next/link";

const BrandCard = ({ name }) => {
  return (
    <Link
      href={formatLink("/#brand#", { brand: name })}
      className="flex items-center shadow justify-center text-center rounded-xl py-3"
    >
      <span>{name}</span>
    </Link>
  );
};

export default BrandCard;
