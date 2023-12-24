import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./../components/Product/Product";
import { __Product } from "../store/products/constants";
import "../components/Product/Product.css";
import { AppDispatch, RootState } from "../store/store";
import { fetchProducts } from "../store/products/slice";

const ProductList = () => {
  const products: Array<__Product> = useSelector(
    (state: RootState) => state.productStore.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);
  // console.log("products", products);

  return (
    <div className="ui grid container">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
