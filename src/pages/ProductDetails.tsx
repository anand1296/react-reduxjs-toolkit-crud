import React, { ReducerState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { __ProductDetails, __ProductState } from "../store/products/constants";
import { RootState } from "../store/store";
import { Dispatch } from "redux";
import { fetchProductById, removeSelectedProduct } from "../store/products/slice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch<Dispatch<any>>();
  const product = useSelector<RootState, __ProductDetails | null>(
    (state) => state.productStore.selectedProduct
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById({id}))
    }

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);

  return (
    <div className="ui grid container">
      {product && (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={product.image} />
              </div>
              <div className="column rp">
                <h1>{product.title}</h1>
                <h2>
                  <a className="ui teal tag label">${product.price}</a>
                </h2>
                <h3 className="ui brown block header">{product.category}</h3>
                <p>{product.description}</p>
                <div className="ui vertical animated button" tabIndex={0}>
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      : <></>
    </div>
  );
};

export default ProductDetails;
