import { Icons } from "@/components";
import { Button } from "@/components/ui/button";

type ShopButtonProps = {
  chip: number | null;
};
export const ShopButton = ({ chip }: ShopButtonProps) => {
  return (
    <Button variant="outline" size="icon" className={"relative"}>
      <Icons.shop className="h-4 w-4" />
      {chip && (
        <span
          className={
            "absolute flex items-center justify-center text-xs h-5 -top-2 -right-2 aspect-square rounded-full border-[1px] border-[#CBCBCB] bg-white"
          }
        >
          {chip}
        </span>
      )}
    </Button>
  );
};
