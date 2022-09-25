import React from 'react';
import './Product.css';

const Product = (props) => {
	const {product, addToCart} = props;
	const {name, img, seller, price, ratings} = product;
	return (
		<div className="product-card">
			<div className="product-img">
				<img src={img ? img : ''} alt="" />
			</div>
			<div className="product-info">
				<h6 className="product-name">{name}</h6>
				<p className="price">Price: ${price}</p>
				<p className="price">Manufacturer : {seller}</p>
				<p className="rate">Rating : {ratings}</p>
			</div>
			<button onClick={() => addToCart(product)} className="btn-cart">
				<p>Add to Cart</p>
			</button>
		</div>
	);
};

export default Product;
