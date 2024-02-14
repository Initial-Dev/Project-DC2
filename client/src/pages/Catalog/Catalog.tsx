import { RootState } from "@/store";
import { _ProductItem } from "@/types";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'


export const Catalog = () => {
    const products = useSelector((state: RootState) => state.products.products);
    const productsWithImages = products.filter((product: _ProductItem) => product.image);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const totalPages = Math.ceil(productsWithImages.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const productsToDisplay = productsWithImages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
                    {productsToDisplay.map((product) => (
                        <a key={product.id} href={`/detail/${product.id}`} className="group text-sm">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center transition duration-300 ease-in-out hover:scale-90"
                                />
                            </div>
                            <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
                            <p className="italic text-gray-500">{product.brand}</p>
                            <p className="mt-2 font-medium text-gray-900">{product.price} €</p>
                        </a>
                    ))}
                </div>
                <nav className="flex items-center justify-center px-4 pt-8 sm:px-0">
                <div className="-mt-px flex gap-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 w-9 rounded-full -right-12 top-1/2 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
                    >
                        <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <div className="hidden md:-mt-px md:flex gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 w-9 rounded-full -right-12 top-1/2 border border-input bg-background shadow-sm ${currentPage === pageNumber ? 'bg-slate-900 text-slate-100' : ''} hover:bg-accent hover:text-accent-foreground`}
                                aria-current={currentPage === pageNumber ? 'page' : undefined}
                            >
                                {pageNumber}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 w-9 rounded-full -right-12 top-1/2 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
                    >
                        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                    </button>
                </div>
            </nav>
            </div>
        </div>
    );
};