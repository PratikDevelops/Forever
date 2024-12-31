import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductItem from './ProductItem';
import '../Styles/LatestCollection.css';

function LatestCollection() {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {
            setLatestProducts(products.slice(0, 10)); 
        }
    }, [products]); 

    return (
        <div className="latest-collection">
            <h1>Latest Collection</h1>
            <div className="collection-info">
                <p>Discover our latest collection of amazing products, handpicked for you. Explore now!</p>
            </div>
            <div className="product-list">
                {latestProducts.map((item) => (
                    <ProductItem
                        key={item._id}
                        image={item.image}
                        name={item.name}
                        id={item._id}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default LatestCollection;
