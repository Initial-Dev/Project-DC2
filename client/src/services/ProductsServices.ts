export const getAllProducts = async () => {
  return fetch(`http://localhost:5000/products`);
};
