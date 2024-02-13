export const getAllItemsInCart = async () => {
  return fetch("http://localhost:5000/cart/1");
};
