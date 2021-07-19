import React from "react";
import { Link } from "react-router-dom";

export const Jumbotron = () => {
	return (
		<div className="container-fluid mt-4 ">
			<div className="jumbotron p-auto">
				<h1 className="display-4">
					A warm welcome! <i className="fas fa-mug-hot fa-2x" />
				</h1>
				<p className="lead">Hello, This is a simple to do list to help you to organize your day</p>
				{/* <hr className="my-4" /> */}
				{/* <p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p> */}
				<p className="lead">
					<Link to="/todo">
						<a className="btn btn-primary btn-lg" href="#" role="button">
							Click here
						</a>
					</Link>
				</p>
			</div>
		</div>
	);
};
