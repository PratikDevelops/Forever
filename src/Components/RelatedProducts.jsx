import React from "react";
import { Link } from "react-router-dom";
import "../Styles/RelatedProduct.css";

function RelatedProducts({ currentProductId, category, products }) {

  const relatedProducts = products
    .filter(
      (product) =>
        product.category === category && product._id !== currentProductId
    )
    .slice(0, 4); 

  return relatedProducts.length ? (
    <div className="related-products-container">
      <h2>Related Products</h2>
      <div className="related-products-list">
        {relatedProducts.map(({ _id, image, name, currency, price }) => (
          <div key={_id} className="related-product-card">
            <Link to={`/product/${_id}`}>
              <img src={image[0]} alt={name} className="related-product-image" />
              <h3>{name}</h3>
            </Link>
            <p>
              {currency} {price}
            </p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <p>No related products found.</p>
  );
}

export default RelatedProducts;
