import React from 'react';
import logo from '../../images//Logo.svg';
import './Header.css';
const Header = () => {
	return (
		<nav className="header">
			<div className="logo">
				<img src={logo} alt="" />
			</div>
			<div className="nav-item">
				<a href="/order">Order</a>
				<a href="/review">Order Review</a>
				<a href="/manage">Manage Inventory</a>
				<a href="/login">Login</a>
			</div>
		</nav>
	);
};

export default Header;
