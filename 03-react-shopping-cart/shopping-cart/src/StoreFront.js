import React, { useState } from "react";
import Product from "./Product.js";

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [validationMsg, setValidationMsg] = useState("");
  const [productDescription, setProductDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    //validation
    if (!productName) {
      setValidationMsg("Add a product name");
      return;
    }

    if (!productDescription) {
      setValidationMsg("Add a product description");
      return;
    }

    // add product
    setProducts([
      ...products,
      {
        name: productName,
        description: productDescription,
        id: products.length + 1,
      },
    ]);

    //clear input fields
    setProductName("");
    setProductDescription("");
    setValidationMsg("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            placeholder="Enter the name"
            className="textfield"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            type="text"
            placeholder="Enter the description"
            className="textfield"
          />
        </div>
        <div className="form-footer">
          <div className="validation-message">{validationMsg}</div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add product"
          />
        </div>
      </form>
      <div>{products.length === 0 ? <p>Add your first product</p> : ""}</div>
      <ul className="store-front">
        {products.map((item) => (
          <li>
            <Product key={Math.random() * 1000} details={item} />
            <button
              onClick={() =>
                setProducts(
                  products.filter((product) => product.id !== item.id)
                )
              }
              className="btn-outline btn-delete"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
