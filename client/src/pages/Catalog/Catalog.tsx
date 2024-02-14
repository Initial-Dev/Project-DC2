import { Card, CardContent } from "@/components/ui/card";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export const Catalog = () => {

    const products = useSelector((state: RootState) => state.products.products);

    return(
        {products.map((product) => (
        <a href={product.id}>
              <div className="flex flex-col  gap-2 px-1">
                <Card className="bg-zinc-100 overflow-hidden rounded-xl">
                    <CardContent className="relative max-w-xs">
                        <img
                        className="object-cover transition duration-300 ease-in-out hover:scale-90"
                        src={product.image}
                        alt={product.name}
                        />
                    </CardContent>
                </Card>
                <div className="flex flex-col gap-0.5">
                    <h1 className="font-kanit text-xs md:text-lg truncate px-1 ">
                        {product.name}
                    </h1>
                    <h1 className="font-kanit font-extralight text-zinc-400 text-xs sm:text-sm truncate px-1 ">
                        {product.category}
                    </h1>
                    <h1 className="font-kanit  text-zinc-900 text-sm truncate px-1 ">
                        {product.price}
                    </h1>
                </div>
            </div>
        </a>
        ))}
    )
};