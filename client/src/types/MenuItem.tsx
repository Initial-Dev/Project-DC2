export type _MenuItem = {
  id: number;
  label: string;
  href: string;
  icon?: string;
  dropdown?: _MenuItem[];
};

export type _MenuItemDropdown = {
  id: number;
  label: string;
  href: string;
  icon?: string;
};
