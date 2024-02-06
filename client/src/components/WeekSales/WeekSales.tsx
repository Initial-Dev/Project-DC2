import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function WeekSales() {
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
      <CarouselContent className="">
        {pictureItem.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/3 lg:basis-1/5"
          >
            <a href="/">
              <div className="flex flex-col  gap-2 px-1">
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
                  <h1 className="font-kanit text-xs md:text-lg truncate px-1 ">
                    {item.name}
                  </h1>
                  <h1 className="font-kanit font-extralight text-zinc-400 text-xs sm:text-sm truncate px-1 ">
                    {item.genre}
                  </h1>
                  <h1 className="font-kanit  text-zinc-900 text-sm truncate px-1 ">
                    {item.price}
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

const pictureItem = [
  {
    id: 1,
    name: "Nike Air Dunk Jumbo",
    genre: "Chaussure pour homme",
    image: "./item1.webp",
    href: "/product/1",
    price: "129,99 €",
  },
  {
    id: 2,
    name: "adidas Campus 00s",
    genre: "Chaussure pour homme",
    image: "./item2.webp",
    href: "/product/1",
    price: "130,00 €",
  },
  {
    id: 3,
    name: "Nike Tuned 1 Utility",
    genre: "Chaussure pour homme",
    image: "./item3.webp",
    href: "/product/1",
    price: "199,99 €",
  },
  {
    id: 4,
    name: "Jordan 1 Zoom Air CMFT",
    genre: "Chaussure pour homme",
    image: "./item4.webp",
    href: "/product/1",
    price: "169,99 €",
  },
  {
    id: 5,
    name: "New Balance 530",
    genre: "Chaussure pour femme",
    image: "./item5.webp",
    href: "/product/1",
    price: "100,00 €",
  },
  {
    id: 6,
    name: "ON Cloudtilt",
    genre: "Chaussure pour homme",
    image: "./item6.webp",
    href: "/product/1",
    price: "169,99 €",
  },
  {
    id: 7,
    name: "Converse Run Star Legacy CX Platform High",
    genre: "Chaussure pour femme",
    image: "./item7.webp",
    href: "/product/1",
    price: "129,99 €",
  },
  {
    id: 8,
    name: "Nike Air Max Pulse",
    genre: "Chaussure pour femme",
    image: "./item8.webp",
    href: "/product/1",
    price: "159,99 €",
  },
];
