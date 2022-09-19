import React from 'react';


export default function ProductList({ product, addItems }) { 
    
  return (
    <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button className='add-btn' onClick={() => addItems(product)}>Add item</button>
    </div>
  )
} 
 