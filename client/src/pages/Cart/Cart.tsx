import { CartItem, CartPayment, CartRecap } from "@/components";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export const Cart = () => {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <div className={"w-full font-kanit flex flex-col py-8 px-12"}>
      <div className={"flex justify-between text-lg font-bold"}>
        <h2>Mon panier</h2>
        <span>{totalPrice} €</span>
      </div>
      <div
        className={
          "flex flex-col-reverse lg:flex-row justify-between py-8 gap-8"
        }
      >
        <section className={"w-full lg:w-3/5"}>
          <CartItem />
        </section>
        <section className={"w-full lg:w-2/5 flex flex-col gap-8"}>
          <CartRecap />
          <CartPayment />
        </section>
      </div>
    </div>
  );
};
