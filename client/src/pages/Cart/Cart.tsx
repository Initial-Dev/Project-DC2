import { CartItem, CartPayment, CartRecap } from "@/components";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const productsData = useSelector(
    (state: RootState) => state.products.products,
  );
  const [totalPrice, setTotalPrice] = useState("0");

  useEffect(() => {
    if (productsData.length > 0 && cartItems.length > 0) {
      let total = 0;
      cartItems.forEach((item) => {
        const product = productsData.find(
          (product) => product.id === item.itemId,
        );
        if (product?.price) {
          total += product?.price * item.quantity;
        }
      });
      setTotalPrice(total.toFixed(2).replace(".", ",").toString());
    } else {
      setTotalPrice("0");
    }
  }, [cartItems, productsData]);

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
        <section className={"w-full lg:w-3/5 flex flex-col gap-8"}>
          {cartItems.map(
            (item, index) =>
              productsData.find((product) => product.id === item.itemId) && (
                <CartItem
                  key={index}
                  item={item}
                  product={productsData.find(
                    (product) => product.id === item.itemId,
                  )}
                />
              ),
          )}
        </section>
        <section className={"w-full lg:w-2/5 flex flex-col gap-8"}>
          <CartRecap totalPrice={totalPrice} />
          <CartPayment />
        </section>
      </div>
    </div>
  );
};
