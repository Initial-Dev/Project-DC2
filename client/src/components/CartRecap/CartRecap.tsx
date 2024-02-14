type CartRecapProps = {
  totalPrice: string;
};

export const CartRecap = ({ totalPrice }: CartRecapProps) => {
  return (
    <>
      <div className={"flex flex-col border-[1px] border-[#CBCBCB] p-4 gap-6"}>
        <span className={"font-bold"}>Récapitulatif</span>
        <div className={"flex flex-col gap-6"}>
          <div className={"flex flex-col gap-2"}>
            <span className={"flex justify-between text-sm font-bold"}>
              <span className={""}>EXPEDITION</span>
              <span className={""}>Gratuit</span>
            </span>
            <span className={"text-sm font-light"}>
              Standard (3-4 jours ouvrables) - (1 article)
            </span>
          </div>
          <div className={"flex flex-col font-light gap-2"}>
            <span className={"flex justify-between text-sm font-bold"}>
              <span className={""}>REMISES</span>
              <span>0.00 €</span>
            </span>
            <span className={"text-sm font-light"}>
              Ajouter un code promo ?
            </span>
          </div>
          <div className={"flex flex-col font-light gap-2"}>
            <span className={"flex justify-between text-sm font-bold"}>
              <span className={""}>TOTAL ESTIME</span>
              <span>{totalPrice} €</span>
            </span>
            <span className={"text-sm font-light"}>TVA Incluse</span>
          </div>
        </div>
      </div>
    </>
  );
};
