import React from 'react';
import './Product.css';

const Product = (props) => {
	console.log(props.product);
	const {name, img, seller, price, ratings} = props.product;
	return (
		<div className="product-card">
			<div className="product-img">
				<img src={img} alt="" />
			</div>
			<div className="product-info">
				<h6 className="product-name">{name}</h6>
				<p className="price">Price: ${price}</p>
				<p className="price">Manufacturer : {seller}</p>
				<p className="rate">Rating : {ratings}</p>
			</div>
			<button className="btn-cart">
				<p>Add to Cart</p>
			</button>
		</div>
	);
};

export default Product;
