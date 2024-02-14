import paypal from "@/assets/PayPal.png";

export const CartPayment = () => {
  return (
    <div className={"flex flex-col border-[1px] border-[#CBCBCB] p-4 gap-4"}>
      <button
        className={
          "p-4 bg-black text-white font-bold tracking-tighter hover:bg-[#2e2e31]"
        }
        onClick={() => (window.location.href = "/login")}
      >
        Se connecter
      </button>
      <button
        className={
          "p-4 border-2 border-black font-bold tracking-tighter hover:border-[#2e2e31] hover:text-[#2e2e31] hover:bg-[#f6f6f6]"
        }
      >
        PAIEMENT EN TANT QU'INVITÉ
      </button>
      <div className={"relative border-t-2 border-[#CBCBCB] w-full my-4 "}>
        <span
          className={
            "absolute left-1/2 -translate-x-1/2 -top-3.5 px-8 bg-white font-kanit"
          }
        >
          ou
        </span>
      </div>
      <button
        className={
          "border-2 border-[#D9D9D9] bg-[#F6F6F6] p-4 flex items-center justify-center hover:border-[#ffd140] hover:bg-[#ffd14055]"
        }
      >
        <img className={"h-8"} src={paypal} alt={"paypal"} />
      </button>
    </div>
  );
};
