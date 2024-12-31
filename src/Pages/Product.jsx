import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import "../Styles/RelatedProduct.css"
import "../Styles/Product.css"
import RelatedProducts from "../Components/RelatedProducts";

function Product() {
  const { products, currency, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProductData = () => {
      if (products) {
        const product = products.find((item) => item._id === productId);
        if (product) {
          setProductData(product);
          setSelectedImage(product.image[0]);
        }
      }
    };
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <p>Loading product data...</p>;
  }

  const handleAddToCart = () => {
    addToCart(productData); 
  };

  return (
    <div className="product-container">
      <div className="left-section">
        <div className="product-image">
          {selectedImage ? (
            <img src={selectedImage} alt={productData.name} />
          ) : (
            <p>Loading image...</p>
          )}
        </div>

        <div className="product-thumbnails">
          {productData.image.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(imgSrc)}
              className="thumbnail"
            />
          ))}
        </div>
      </div>

      <div className="right-section">
        <h1>{productData.name}</h1>

        <div className="product-rating">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={assets.star_icon} alt="Star" />
          ))}
          <img src={assets.star_dull_icon} alt="Star" />
          <p>(122)</p>
        </div>

        <p className="product-price">
          {currency} {productData.price}
        </p>

        <p className="product-description">{productData.description}</p>

        <div className="size-selector">
          <p>Select size:</p>
          <div className="sizes">
            {productData.sizes.map((size) => (
              <button key={size} className="size-button">
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="add-to-cart">
          <button className="cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <RelatedProducts
        currentProductId={productId}
        category={productData.category}
        products={products}
      />
    </div>
  );
}

export default Product;
