import { Icons } from "@/components";
import { Button } from "@/components/ui/button";
import React from "react";
export const ShopButton = () => {
  return (
    <Button variant="outline" size="icon">
      <Icons.shop className="h-4 w-4" />
    </Button>
  );
};
