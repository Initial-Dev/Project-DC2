import { RootState } from "@/store";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { WeekSales } from "@/components";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Detail = () => {
  const id = useParams().id;

  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => String(p.id) === String(id)),
  );

  console.log(product);

  return (
    <div>
      {product && (
        <>
          <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              {/* Product */}
              <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                {/* Image gallery */}
                <Tab.Group as="div" className="flex flex-col-reverse">
                  {/* Image selector */}
                  <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                    <Tab.List className="grid grid-cols-4 gap-6">
                      <Tab
                        key={product.id}
                        className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                      >
                        {({ selected }) => (
                          <>
                            <span className="sr-only">{product.name}</span>
                            <span className="absolute inset-0 overflow-hidden  bg-zinc-100 rounded-lg">
                              <img
                                src={product.image}
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </span>
                            <span
                              className={classNames(
                                selected ? "ring-zinc-900" : "ring-transparent",
                                "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2",
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>
                    </Tab.List>
                  </div>

                  <Tab.Panels className="aspect-h-1 aspect-w-1 w-full bg-zinc-100 rounded-lg">
                    <Tab.Panel key={product.id}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center sm:rounded-lg"
                      />
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>

                {/* Product info */}
                <div className="mt-10 md:px-28 sm:mt-16 sm:px-0 lg:mt-0">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    {product.name}
                  </h1>

                  <div className="flex flex-col gap-3 mt-3">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-3xl tracking-tight text-zinc-700">
                      Chaussures pour {product.category}
                    </p>
                    <p className="text-3xl tracking-tight text-gray-900">
                      {product.price} €
                    </p>
                  </div>
                  <SizeSelector />
                  <form className="mt-6">
                    <div className="mt-10 flex">
                      <button
                        type="submit"
                        className="flex max-w-xs font-kanit flex-1 items-center justify-center rounded-full border border-transparent bg-zinc-900 px-8 py-3 text-base font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                      >
                        Ajouer au panier
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <section
                aria-labelledby="related-heading"
                className="mt-10 border-t border-gray-200 px-0 py-16 sm:px-0"
              >
                <WeekSales />
              </section>
            </div>
          </main>
        </>
      )}
    </div>
  );
};

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const sizes = [
    35.5, 36, 36.5, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5,
    45, 45.5, 46, 47, 47.5, 48.5, 49.5,
  ];

  return (
    <div className="py-4">
      <div className="flex mb-3 items-center justify-between ">
        <h2 className="text-left text-lg font-kanit ">
          Sélectionner la taille
        </h2>
        <div className="text-right">
          <button className="underline">Guide des tailles</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {sizes.map((size, index) => (
          <button
            key={index}
            className={`border-2 border-zinc-400 px-4 py-2 rounded-md ${
              selectedSize === size ? "bg-zinc-300" : "hover:bg-zinc-300"
            }`}
            onClick={() => setSelectedSize(size)}
          >
            EU {size}
          </button>
        ))}
      </div>
    </div>
  );
};
