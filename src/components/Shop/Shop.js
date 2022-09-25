import React, {useEffect, useState} from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		fetch('products.json')
			.then((res) => res.json())
			.then((products) => setProducts(products));
	}, []);
	const addToCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
	};
	return (
		<div className="shop-container">
			<div className="product">
				{products.map((product) => (
					<Product key={product.id} product={product} addToCart={addToCart}></Product>
				))}
			</div>
			<div className="order-summary">
				<h2>Order Summary</h2>
				<p>Selected Products: {cart.length}</p>
			</div>
		</div>
	);
};

export default Shop;
