import { CartItem, CartPayment, CartRecap } from "@/components";

export const Cart = () => {
  return (
    <div className={"w-full font-kanit flex flex-col py-8 px-12"}>
      <div className={"flex justify-between text-lg font-bold"}>
        <h2>Mon panier</h2>
        <span>{"111.11"} €</span>
      </div>
      <div className={"flex justify-between py-8 gap-8"}>
        <section className={"w-3/5"}>
          <CartItem />
        </section>
        <section className={"w-2/5 flex flex-col gap-8"}>
          <CartRecap />
          <CartPayment />
        </section>
      </div>
    </div>
  );
};
