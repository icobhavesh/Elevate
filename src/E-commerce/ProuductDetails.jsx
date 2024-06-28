// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProductDetails = ({ product }) => {
    const {id}= useParams()
    console.log("recived data will be ",product);
  const productItem = product.find(ele=>ele.id===parseInt(id))
    return (
        <div>
            <h2>{productItem.title}</h2>
            <p>{productItem.description}</p>
            <p>Price: {productItem.price}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default ProductDetails;
