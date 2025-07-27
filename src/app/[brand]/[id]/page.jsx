import { getProductByName } from "@/repository/repository";

export const generateMetadata = async ({ params }) => {
  const { brand, id } = params;

  const product = getProductByName(brand, id);

  return {
    title: `${product.brand} ${product.model.name}`,
    description: `${product.brand} ${product.model.name}`,
  };
};

export default function DetailProductPage({ params }) {
  const brandProduct = getProductByName(params.brand, params.id);

  if (!brandProduct) {
    return notFound();
  }

  const product = brandProduct.model;

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:max-w-lg lg:self-end">
        <div className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {product.name}
          </h1>
        </div>

        <section aria-labelledby="information-heading" className="mt-4">
          <h2 id="information-heading" className="sr-only">
            Product information
          </h2>
          <div className="flex items-center">
            <p className="text-lg text-gray-900 sm:text-xl">{product.price}</p>
          </div>
          <div className="mt-4 space-y-6">
            <p className="text-base text-gray-500">{product.description}</p>
          </div>{" "}
        </section>
      </div>

      {/* Product image */}
      <div className="bg-white mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        <img
          alt={product.name}
          src={product.images[0]}
          className="aspect-square w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
