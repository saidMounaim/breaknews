import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
			<div className="container">
				<Link className="navbar-brand text-center" to="/">
					Breaknews
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
