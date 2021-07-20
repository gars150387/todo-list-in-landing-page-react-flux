import React from "react";
import { Link } from "react-router-dom";
// import { Modal } from "./modal";

export const Navbar = () => {
	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
			<button
				className="navbar-toggler navbar-toggler-sticky-top"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo03"
				aria-controls="navbarTogglerDemo03"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<Link to="/">
				<div>
					<a className="navbar-brand content-justify-center" href="#">
						Start Bootstrap
					</a>
				</div>
			</Link>
			<div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link to="/">
							<a className="nav-link" href="#">
								Sign Up <span className="sr-only">(current)</span>
							</a>
							{/* <Modal /> */}
						</Link>
					</li>
					<li className="nav-item active">
						<Link to="/">
							<a className="nav-link" href="#">
								Sign In
							</a>
						</Link>
					</li>
					{/* <li className="nav-item active">
						<Link to="/">
							<a className="nav-link" href="#">
								Service
							</a>
						</Link>
					</li>
					<li className="nav-item active">
						<Link to="/">
							<a className="nav-link" href="#">
								Contact
							</a>
						</Link>
					</li> */}
				</ul>
			</div>
		</nav>
	);
};
