export interface ProductsState {
  products: _ProductItem[];
  status: "idle" | "loading" | "failed";
}

export interface _ProductItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
