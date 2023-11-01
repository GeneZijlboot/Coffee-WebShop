import React from 'react';

function ShoppingCart({ SpecificCoffee, handleDeleteProduct }) {
  return (
    <div>
      {SpecificCoffee.map((product, index) => (
        <div key={index}>
          <p>Name: {product.Name}</p>
          <p>Url link: {product.Url}</p>
          <p>Price: ${product.Price}</p>
          <button onClick={() => handleDeleteProduct(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
