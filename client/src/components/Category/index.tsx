import { Badge } from "@/components/ui/badge";

export const Category = () => {
  const images = [
    {
      id: 1,
      src: "./images/category/category1.png",
      alt: "",
      title: "Homme",
      href: "",
    },
    {
      id: 2,
      src: "./images/category/category2.png",
      alt: "",
      title: "Femme",
      href: "",
    },
    {
      id: 3,
      src: "./images/category/category3.png",
      alt: "",
      title: "Enfant",
      href: "/",
    },
  ];

  return (
    <div className="flex flex-col gap-4 relative w-full px-8">
      <div className="flex items-center px-2">
        <h1 className="font-kanit font-normal items-center text-xl">
          Univers de mode
        </h1>
      </div>
      <div className="flex overflow-x-scroll md:overflow-hidden">
        <div className="flex min-w-max  md:min-w-full md:w-full items-center px-1 gap-4">
          {images.map((image) => (
            <a
              key={image.id}
              href={image.href}
              className="relative w-48 h-full md:w-full rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-full object-cover object-top transform grayscale hover:grayscale-0 transition-all duration-500  "
                src={image.src}
                alt={image.alt}
              />
              <Badge className="absolute rounded-full bottom-2 left-2 sm:left-5 sm:bottom-5 flex items-center justify-center">
                {image.title}
              </Badge>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
