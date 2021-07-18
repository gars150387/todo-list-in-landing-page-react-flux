import React from "react";
import { Link } from "react-router-dom";

export const Jumbotron = () => {
	return (
		<div className="container-fluid mt-4 ">
			<div className="jumbotron p-auto">
				<h1 className="display-4">A warm welcome!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
				{/* <hr className="my-4" /> */}
				{/* <p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p> */}
				<p className="lead">
					<Link to="/todo">
						<a className="btn btn-primary btn-lg" href="#" role="button">
							Call to action
						</a>
					</Link>
				</p>
			</div>
		</div>
	);
};
