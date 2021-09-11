import React, { Component } from 'react';
class Header extends Component {
	render () {
		return (
			<nav className="navbar navbar-inverse">
			<div className="container-fluid">
			<a className="navbar-brand" href="google.com">Form</a>
			<ul className="nav navbar-nav">
			<li className="active">
			<a href="google.com">Home</a>
			</li>
			<li>
			<a href="google.com">Product</a>
			</li>
			<li>
			<a href="google.com">
			<i className="fas fa-shopping-cart" style={{ color: "white" }}></i>
			</a>
			</li>
			<li>
			<a href="google.com">
			<i className="fas fa-heart" style={{ color: "white" }}></i>
			</a></li>
			</ul>
			</div>
			</nav>
			);
	};
}

export default Header;
