import { _CartItem } from "@/types/CartItem.ts";
import { _ProductItem } from "@/types";
import { useDispatch } from "react-redux";
import {
  changeQuantityInCart,
  deleteItemInCart,
} from "@/services/CartServices.ts";

type CartItemProps = {
  item: _CartItem;
  product: _ProductItem | undefined;
};
export const CartItem = ({ item, product }: CartItemProps) => {
  const dispatch = useDispatch();
  const deleteItemFromCart = async (itemId: number | undefined) => {
    if (itemId) {
      if (item.quantity <= 1) {
        dispatch({ type: "cart/removeItemFromCart", payload: itemId });
        await deleteItemInCart(itemId);
      } else {
        dispatch({ type: "cart/removeOneAmountFromItem", payload: itemId });
        await changeQuantityInCart(itemId, item.quantity - 1);
      }
    }
  };

  const redirectOnItem = (itemId: number | undefined) => {
    if (itemId) {
      window.location.href = `/${itemId}`;
    }
  };

  return (
    <>
      <div className={"flex border-[1px] border-[#CBCBCB] p-4 gap-4"}>
        <div
          className={
            "aspect-square w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 flex items-center hover:cursor-pointer"
          }
          onClick={() => redirectOnItem(product?.id)}
        >
          <img src={product?.image} alt={product?.name} />
        </div>
        <div className={"flex flex-col grow gap-3 relative"}>
          <div className={"my-2"}>
            <span className={"flex justify-between font-bold text-sm"}>
              <span
                className={"hover:cursor-pointer"}
                onClick={() => redirectOnItem(product?.id)}
              >
                {product?.name}
              </span>
              <span>
                {product?.price.toFixed(2).replace(".", ",").toString()}€
              </span>
            </span>
            <span className={"text-sm font-light"}>{product?.category}</span>
          </div>
          <span className={"font-light text-sm lg:text-base"}>
            <span>{product?.variants}</span>
          </span>
          <span className={"font-light text-sm lg:text-base"}>
            <span className={"font-bold"}>{"42"}</span> - Taille
          </span>
          <span className={"font-light text-sm lg:text-base"}>
            <span className={"font-bold"}>{item.quantity}</span> - Quantité
          </span>
          <button
            className={
              "cursor-pointer absolute bottom-0 right-0 h-8 aspect-square bg-white hover:bg-red-500/15 text-center rounded-full flex items-center justify-center"
            }
            onClick={() => deleteItemFromCart(item.itemId)}
          >
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12L14 16M14 12L10 16M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
