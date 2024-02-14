export const getAllItemsInCart = async () => {
  return fetch(`${process.env.API_URL}/cart/1`);
};
export const deleteItemInCart = async (itemId: number) => {
  return fetch(`${process.env.API_URL}/cart`, {
    method: "DELETE",
    body: JSON.stringify({ idItem: itemId, idUser: 1 }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const changeQuantityInCart = async (
  itemId: number,
  quantity: number,
) => {
  return fetch(`${process.env.API_URL}/cart`, {
    method: "PUT",
    body: JSON.stringify({ idItem: itemId, idUser: 1, quantity: quantity }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const addItemToCart = async (itemId: number, quantity: number) => {
  return fetch(`${process.env.API_URL}/cart`, {
    method: "POST",
    body: JSON.stringify({ idItem: itemId, idUser: 1, quantity: quantity }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
