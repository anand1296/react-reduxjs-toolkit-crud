export const ActionTypes = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_SELECTED_PRODUCT: "SET_SELECTED_PRODUCT",
  REMOVE_SELECTED_PRODUCT: "REMOVE_SELECTED_PRODUCT",
};

export type __ProductState = {
  products: Array<__Product>;
  selectedProduct: __ProductDetails | null;
};

export type __Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: __Rating;
};

export type __Rating = {
  rate: number;
  count: number;
};

export type __ProductDetails = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: __Rating;
};
