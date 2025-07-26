import Link from "next/link";

const Header1 = () => {
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8"
      >
        <div className="flex gap-x-6 lg:gap-x-12">
          <Link href="/" className="text-sm/6 font-semibold text-gray-900">
            Home
          </Link>
          <Link
            href="/brands"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Brands
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-gray-900">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header1;
