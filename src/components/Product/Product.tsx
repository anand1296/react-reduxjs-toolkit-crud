import React from "react";
import { Link } from "react-router-dom";
import { __Product } from "../../store/products/constants";

const Product = ({ product }: {product: __Product}) => {
  const { id, title, image, price, category } = product;
  return (
    <div className="four column wide" style={{ width: "25%" }}>
      <Link to={`/products/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header title">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(Product);
