import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RootState } from "@/store";
import { ProductsState } from "@/types";
import { useSelector } from "react-redux";

export function WeekSales() {
  const { products, status } = useSelector(
    (state: RootState) => state.products as ProductsState,
  );

  if (status === "loading") return <div>Chargement...</div>;
  if (status === "failed") return <div>Erreur lors du chargement</div>;

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
        {products.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-1/2 sm:basis-1/3 lg:basis-1/5"
          >
            <a href={`#${item.id}`}>
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
                    {item.description}
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
