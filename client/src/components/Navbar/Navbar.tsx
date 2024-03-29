import { NavigationNav, SearchBar, ShopButton } from "@/components/";
//import { UserNav } from '@/components/UserNav/UserNav';
import { RootState } from "@/store";
import "@fontsource/protest-strike";
import { Dialog, Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";

interface NavbarProps {
  currentPath: string;
}

const products = [
  {
    name: "NIKE",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Adidas",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Reebok",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "New Balance",
    href: "#",
  },
  {
    name: "Jordan",
    href: "#",
  },
  {
    name: "Voir plus",
    href: "#",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  let cartItemsAmount = 0;

  cartItems.forEach((item) => {
    cartItemsAmount += item.quantity;
  });

  return (
    <nav className="sticky top-0 z-50 h-auto bg-white border-b ">
      <div className="flex h-16 items-center px-4">
        <a className="flex items-center gap-4" href="/">
          <img
            src="./logo.png"
            alt="Logo"
            className={`ml-3 w-12 h-12 transform transition-all duration-300`}
          />

          <h1 className=" hidden sm:block font-['Protest_Strike'] font-normal text-xl text-slate-800">
            BREIZHSPORT
          </h1>
        </a>
        <div className="ml-auto flex flex-wrap items-center space-x-4">
          <NavigationNav currentPath={currentPath} />
          <SearchBar />
          <ShopButton
            link="/cart"
            chip={cartItemsAmount > 0 ? cartItemsAmount : null}
          />
          <Button link={"/login"}> Login </Button>
          {/* <UserNav /> */}
          <div className="flex xl:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Dialog
            as="div"
            className="xl:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">BreizhSPORT</span>
                  <img
                    className="h-8 w-auto"
                    src="./logo.png"
                    alt="BreizhSPORT-logo"
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a
                      href="/"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Accueil
                    </a>
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Marques
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none",
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...products].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <button
                      onClick={() => (window.location.href = "/catalog")}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Catalogue
                    </button>
                    <button
                      onClick={() => (window.location.href = "/new-products")}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Nouveaux produits
                    </button>
                    <a
                      href="/"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Meilleures ventes
                    </a>
                  </div>
                  <div className="py-6">
                    <button
                      onClick={() => (window.location.href = "/login")}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};
