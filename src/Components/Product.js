import React from "react";

const Product = ({ match, data }) => {
  let product = data.find(
    (produit) => produit.id === Number(match.params.productId)
  );
  let productData;

  if (product)
    productData = (
      <div>
        <h3> {product.name} </h3>
        <p>{product.description}</p>
        <hr />
        <h4>{product.status}</h4>{" "}
      </div>
    );
  return <div>{productData}</div>;
};

export default Product;
