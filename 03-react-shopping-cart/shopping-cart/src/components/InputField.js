import React from "react";

export default function InputField(props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        id="name"
        value={props.productName}
        onChange={(e) => props.setName(e.target.value)}
        type="text"
        placeholder={`Enter the ${props.name.toLowerCase()}`}
        className="textfield"
      />
    </div>
  );
}
