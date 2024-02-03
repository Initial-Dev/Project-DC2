import { Icons } from "@/components";
import { Button } from "@/components/ui/button";
export const ShopButton = () => {
  return (
    <Button variant="outline" size="icon">
      <Icons.shop className="h-4 w-4" />
    </Button>
  );
};
