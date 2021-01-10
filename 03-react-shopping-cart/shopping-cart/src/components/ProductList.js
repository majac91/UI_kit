import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return (
    <ul className="store-front">
      {props.products.map((item) => (
        <li>
          <Product key={Math.random() * 1000} details={item} />
          <button
            onClick={() =>
              props.setProducts(
                props.products.filter((product) => product.id !== item.id)
              )
            }
            className="btn-outline btn-delete"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
