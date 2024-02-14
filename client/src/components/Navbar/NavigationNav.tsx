import * as React from "react";

import { Icons } from "@/components/";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigationStyles";
import { cn } from "@/lib/utils";

type NavigationNavProps = {
  currentPath: string;
};

const components: {
  title: string;
  href: string;
  link?: string;
  description?: string;
  noTitle?: boolean;
}[] = [
  {
    title: "Nike Air Force 1 Low",
    href: "/",
    description: "€ 119,99",
    link: "https://images.footlocker.com/is/image/FLEU/314101996404_01?wid=581&hei=581&fmt=png-alpha",
  },
  {
    title: "ON Cloudtilt",
    href: "/",
    description: "€ 169,99",
    link: "https://images.footlocker.com/is/image/FLEU/314207841504_01?wid=581&hei=581&fmt=png-alpha",
  },
  {
    title: "adidas Campus 00s",
    href: "/",
    description: "€ 94,99",
    link: "https://images.footlocker.com/is/image/FLEU/316704158704_01?wid=581&hei=581&fmt=png-alpha",
  },
  {
    title: "Puma Mb.01",
    href: "/",
    description: "€ 114,99",
    link: "https://images.footlocker.com/is/image/FLEU/316705194104_01?wid=581&hei=581&fmt=png-alpha",
  },
  {
    title: "New Balance 550",
    href: "/",
    description: "€ 139,99",
    link: "https://images.footlocker.com/is/image/FLEU/314104331104_01?wid=581&hei=581&fmt=png-alpha",
  },

  {
    noTitle: true,
    title: "Voir plus",
    href: "/new-products",
  },
];

const marques: {
  href: string;
  icon?: string;
  title?: string;
  isTitle?: boolean;
}[] = [
  {
    href: "/",
    icon: "nike",
  },
  {
    href: "/",
    icon: "adidas",
  },
  {
    href: "/",
    icon: "reebok",
  },
  {
    href: "/",
    icon: "newbalance",
  },
  {
    href: "/",
    icon: "jordan",
  },

  {
    href: "/marques",
    title: "Voir plus",
    isTitle: true,
  },
];

export const NavigationNav = ({ currentPath }: NavigationNavProps) => {
  const isActive = (href: string) => currentPath === href;

  return (
    <NavigationMenu className="hidden xl:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              isActive("/")
                ? "bg-accent text-accent-foreground "
                : "text-muted-foreground cursor-pointer hover:text-primary",
            )}
            onClick={() => (window.location.href = "/")}
          >
            Accueil
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              navigationMenuTriggerStyle(),
              isActive("/marques")
                ? "bg-accent text-accent-foreground "
                : "text-muted-foreground hover:text-primary",
            )}
          >
            Marques
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {marques.map((marque, index) => (
                <MarqueItem
                  key={index}
                  href={marque.href}
                  icon={marque.icon}
                  isTitle={marque.isTitle}
                  title={marque.title}
                ></MarqueItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              isActive("/catalog")
                ? "bg-accent text-accent-foreground "
                : "text-muted-foreground cursor-pointer hover:text-primary",
            )}
            onClick={() => (window.location.href = "/catalog")}
          >
            Catalogue
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              navigationMenuTriggerStyle(),
              isActive("/new-products")
                ? "bg-accent text-accent-foreground "
                : "text-muted-foreground hover:text-primary",
            )}
          >
            Nouveaux produits
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component, index) => (
                <ListItem
                  key={index}
                  title={component.title}
                  href={component.href}
                  link={component.link}
                  noTitle={component.noTitle}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              isActive("/best-sales")
                ? "bg-accent text-accent-foreground "
                : "text-muted-foreground hover:text-primary",
            )}
          >
            Meilleures ventes
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    link?: string;
    title?: string;
    noTitle?: boolean;
  }
>(({ className, title, link, noTitle, children, ...props }, ref) => {
  // Si noTitle est true retourne le voir plus
  if (noTitle) {
    return (
      <li>
        <a
          ref={ref}
          className={cn(
            "block select-none border  items-center h-28 justify-center space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            "flex justify-center items-center",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            <h1 className="font-kanit font-medium leading-none">{title}</h1>
            <Icons.chevronRightIcon className="w-6 h-6" />
          </div>
        </a>
      </li>
    );
  }

  // Rendu standard avec article
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="flex items-center w-full h-full gap-2">
            <div className="flex flex-col h-full w-full gap-2 ">
              <h1 className="text-sm font-medium leading-none">{title}</h1>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
            {link && (
              <img
                className="w-20 h-20 border rounded-md mt-2 object-cover object-center bg-gray-100"
                src={link}
                alt={title}
              />
            )}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const MarqueItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon?: string;
    isTitle?: boolean;
    title?: string;
  }
>(({ className, icon, title, isTitle, ...props }, ref) => {
  if (isTitle) {
    return (
      <li>
        {/* Rendu pour le titre */}
        <a
          ref={ref}
          className={cn(
            "block select-none font-kanit font-medium text-lg border items-center h-28 justify-center space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            "flex justify-center items-center",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            <h1 className="font-kanit font-medium leading-none">{title}</h1>
            <Icons.chevronRightIcon className="w-6 h-6" />
          </div>
        </a>
      </li>
    );
  }

  const IconComponent = Icons[icon as keyof typeof Icons] || Icons["nike"];

  return (
    <li>
      {/* Rendu pour l'icône */}
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none border  items-center h-28 justify-center space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            "flex justify-center items-center",
            className,
          )}
          {...props}
        >
          <IconComponent className="w-16 h-16" />
        </a>
      </NavigationMenuLink>
    </li>
  );
});
MarqueItem.displayName = "MarqueItem";
