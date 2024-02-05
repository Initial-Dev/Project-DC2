import { Icons } from "@/components";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "../ui/button";

export const SearchBar = () => {
  return (
    <>
      <div className="hidden md:block relative">
        <Input
          type="search"
          placeholder="Rechercher un produit..."
          className="sm:w-[100px] md:w-[300px] pl-10 rounded-full bg-zinc-100 text-zinc-800"
        />
        <Icons.search className="absolute left-4 top-2.5 h-4 w-4 text-muted-foreground" />
      </div>
      <CommandMenu />
    </>
  );
};

function CommandMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="block md:hidden">
      <Button onClick={() => setOpen(true)} variant="outline" size="icon">
        <Icons.search className="h-4 w-4" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Nike Air Force 1(86)</CommandItem>
            <CommandItem>SKY JORDAN</CommandItem>
            <CommandItem>Jordan 1 Mid</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
