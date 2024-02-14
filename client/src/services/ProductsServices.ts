export const getAllProducts = async () => {
  return fetch(`${process.env.API_URL}/product`);
};
