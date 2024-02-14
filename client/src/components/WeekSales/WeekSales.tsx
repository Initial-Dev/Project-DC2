import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export function WeekSales() {
  const products = useSelector((state: RootState) => state.products.products);

  // Liste des ID de produits que vous souhaitez afficher
  const selectedProductIds = [65, 77, 1, 97, 102, 70, 78, 8];

  // Filtrer les produits pour ne conserver que ceux dont l'ID est dans selectedProductIds
  const selectedProducts = products.filter((product) =>
    selectedProductIds.includes(product.id),
  );

  return (
    <Carousel className="flex flex-col gap-4 relative w-full px-8">
      <div className="flex items-center justify-between px-2">
        <h1 className="font-kanit font-normal items-center text-xl">
          Nouveau cette semaine
        </h1>
        <div className="flex gap-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
      <CarouselContent>
        {selectedProducts.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-1/2 sm:basis-1/3 lg:basis-1/5"
          >
            <a href={`/${item.id}`}>
              <div className="flex flex-col gap-2 px-1">
                <Card className="bg-zinc-100 overflow-hidden rounded-xl">
                  <CardContent className="relative max-w-xs">
                    <img
                      className="object-cover transition duration-300 ease-in-out hover:scale-90"
                      src={item.image}
                      alt={item.name}
                    />
                  </CardContent>
                </Card>
                <div className="flex flex-col gap-0.5">
                  <h1 className="font-kanit text-xs md:text-lg truncate px-1">
                    {item.name}
                  </h1>
                  <h1 className="font-kanit font-extralight text-zinc-400 text-xs sm:text-sm truncate px-1">
                    chaussures pour {item.category}
                  </h1>
                  <h1 className="font-kanit text-zinc-900 text-sm truncate px-1">
                    {item.price} €
                  </h1>
                </div>
              </div>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
