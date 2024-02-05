import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function BrandGrid() {
  return (
    <Carousel className="flex flex-col gap-4 relative w-full px-8">
      <div className="flex items-center justify-between px-2">
        <h1 className="font-kanit font-normal items-center text-xl">
          Retrouvez toutes vos marques préférées
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
              <div className="flex flex-col gap-2 px-1 ">
                <Card className="bg-zinc-100">
                  <CardContent className="relative flex h-28 items-center justify-center  max-w-xs overflow-hidden bg-zinc-100 bg-no-repeat rounded-xl transition duration-300 ease-in-out hover:scale-90">
                    {item.id === 7 ? (
                      <h1 className="font-kanit text-lg">{item.name}</h1>
                    ) : (
                      <img
                        className="object-cover"
                        src={item.image}
                        alt={item.name}
                      />
                    )}
                  </CardContent>
                </Card>
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
    name: "Nike",
    image: "./images/brands/nike_brand.webp",
    href: "/product/1",
  },
  {
    id: 2,
    name: "New Balance",
    image: "./images/brands/newbalance_brand.webp",
    href: "/product/1",
  },
  {
    id: 3,
    name: "Adidas",
    image: "./images/brands/adidas_brand.webp",
    href: "/product/1",
  },
  {
    id: 4,
    name: "Asics",
    image: "./images/brands/asics_brand.webp",
    href: "/product/1",
  },
  {
    id: 5,
    name: "Ugg",
    image: "./images/brands/ugg_brand.webp",
    href: "/product/1",
  },
  {
    id: 6,
    name: "Jordan",
    image: "./images/brands/jordan_brand.webp",
    href: "/product/1",
  },
  {
    id: 7,
    name: "Autre",
    image:
      "https://images.footlocker.com/content/dam/final/footlockereurope/Online_activations/fl-campaign/2022/fl_ecom_hp_brand_bar/05_final_output_files/2021_06_035_ONL_UGG_bar_800x280.jpg",
    href: "/product/1",
  },
];
