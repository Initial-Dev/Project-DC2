import { _MenuItem } from "@/types";
import { MenuItem } from "@/components/Nav/MenuItem.tsx";

export const Nav = () => {
  const menuItems: _MenuItem[] = [
    {
      id: 1,
      label: "Marques",
      href: "/brand",
      dropdown: [
        {
          id: 1,
          label: "Nike",
          href: "/brand/nike",
        },
        {
          id: 2,
          label: "Adidas",
          href: "/brand/adidas",
        },
        {
          id: 3,
          label: "Puma",
          href: "/brand/puma",
        },
      ],
    },
    { id: 2, label: "Catalogue", href: "/list" },
    { id: 3, label: "Nouveaux produits", href: "/news" },
    { id: 4, label: "Meilleures ventes", href: "/best" },
  ];

  return (
    <nav className={"flex gap-4 align-middle mx-5"}>
      {menuItems.map((item) => {
        return <MenuItem key={item.id} menuItem={item} />;
      })}
    </nav>
  );
};
