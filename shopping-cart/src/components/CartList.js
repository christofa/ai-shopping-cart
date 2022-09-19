import React from "react";

export default function CartList({ unit }) {
  return (
    <div className="list">
      <p>{unit.name}</p>
      <p>{unit.description}</p>
      <p>${unit.price}</p>
    </div>
  );
}
