import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {f09a, faCartShopping} from '@fortawesome/free-solid-svg-icons';
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
				<p>Add to Cart </p>
				<FontAwesomeIcon icon={(faCartShopping, f09a)}></FontAwesomeIcon>
			</button>
		</div>
	);
};

export default Product;
