import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
	// console.log(cart);
	let total = 0;
	let shipping = 0;
	for (const product of cart) {
		total = total + product.price;
		shipping = shipping + product.shipping;
	}
	let tax = total * 0.1;
	const taxFix = tax.toFixed(2);
	const totalTax = parseFloat(taxFix);
	const grandTotal = total + shipping + totalTax;
	return (
		<div className="cart">
			<h2>Order Summary</h2>
			<p>Selected Products: {cart.length}</p>
			<p>Total Price: ${total}</p>
			<p>Shipping Charge: ${shipping}</p>
			<p>Tax: ${totalTax}</p>
			<h4>Grand Total: {grandTotal}</h4>
		</div>
	);
};

export default Cart;
