import { Badge } from "@/components/ui/badge";

export const UniverseGrid = () => {
  const images = [
    {
      id: 1,
      src: "./images/universe/image1.png",
      alt: "",
      title: "Basketball",
      href: "",
    },
    {
      id: 2,
      src: "./images/universe/image2.png",
      alt: "",
      title: "Running",
      href: "",
    },
    {
      id: 3,
      src: "./images/universe/image3.png",
      alt: "",
      title: "Football",
      href: "/",
    },
    {
      id: 4,
      src: "./images/universe/image4.png",
      alt: "",
      title: "Tennis",
      href: "/",
    },
    {
      id: 5,
      src: "./images/universe/image5.png",
      alt: "",
      title: "Skateboard",
      href: "/",
    },
  ];

  return (
    <div className="flex flex-col gap-4 relative w-full px-8">
      <div className="flex items-center px-2">
        <h1 className="font-kanit font-normal items-center text-xl">
          Votre Univers Sportif
        </h1>
      </div>
      <div className="flex px-1 py-4 overflow-x-auto">
        <div className="flex items-center gap-4">
          {images.map((image) => (
            <a
              key={image.id}
              href={image.href}
              className="relative w-64 h-36 md:w-96 md:h-48 rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-full object-cover transform grayscale hover:grayscale-0 transition-all duration-500 hover:scale-150 hover:rotate-3"
                src={image.src}
                alt={image.alt}
              />
              <Badge className="absolute rounded-full left-5 bottom-5 flex items-center justify-center">
                {image.title}
              </Badge>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
