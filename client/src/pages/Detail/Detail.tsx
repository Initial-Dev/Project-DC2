import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const Detail = () => {
  const id = useParams().id;

  const product = useSelector((state: RootState) =>
    state.product.products.find((p) => String(p.id) === String(id)),
  );

  console.log(product);

  return (
    <div>
      <h1>Detail</h1>
      <p>
        {product &&
          Object.keys(product).map((key) => {
            return (
              <>
                <p>
                  {key} : {product[key]}
                </p>
              </>
            );
          })}
      </p>
    </div>
  );
};
