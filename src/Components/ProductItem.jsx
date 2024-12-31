import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import '../Styles/ProductItem.css';

function ProductItem({ id, name, image, price }) {
    const { currency } = useContext(ShopContext);
  
    return (
        <div className="product-item">
            <Link to={`/product/${id}`} className="product-link">
                <img src={image[0]} alt={name} className="product-image" />
                <div className="product-info">
                    <p className="product-name">{name}</p>
                    <p className="product-price">{currency} {price}</p>
                </div>
            </Link>
        </div>
    );
}

export default ProductItem;
