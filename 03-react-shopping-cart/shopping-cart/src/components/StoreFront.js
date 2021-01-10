import React, { useState } from "react";
import ProductList from "./ProductList";
import Form from "./Form.js";

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
      <Form
        onFormSubmit={handleSubmit}
        productName={productName}
        productDescription={productDescription}
        setProductDescription={setProductDescription}
        validationMsg={validationMsg}
        setProductName={setProductName}
      />
      <div>{products.length === 0 ? <p>Add your first product</p> : ""}</div>
      <ProductList
        products={products}
        setProducts={setProducts}
        setProductDescription={setProductDescription}
      />
    </>
  );
}
