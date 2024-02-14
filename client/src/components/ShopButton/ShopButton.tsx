import { Icons } from "@/components";
import { Button } from "@/components/ui/button";

type ShopButtonProps = {
  chip: number | null;
  link: string;
};
export const ShopButton = ({ chip, link, ...props }: ShopButtonProps) => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => (window.location.href = link)}
      className={"relative"}
      {...props}
    >
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
