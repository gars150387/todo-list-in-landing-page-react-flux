import React from "react";
import { Link } from "react-router-dom";

let array = [
	{
		title: "To-Do List",
		description: "Perfect tool to organize the task thru the your day!",
		image:
			"data:image/jpeg;base64,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",
		goTo: "https://3000-copper-cattle-bakpbmaf.ws-us11.gitpod.io/todo"
	},
	{
		title: "",
		description: "",
		image: "",
		goTo: ""
	},
	{
		title: "",
		description: "",
		image: "",
		goTo: ""
	},
	{
		title: "",
		description: "",
		image: "",
		goTo: ""
	}
];

export const Card = () => {
	return (
		<div className="card-deck m-0">
			{array &&
				array.map(element => {
					return (
						<>
							<div
								key={element.title}
								className="card text-center mt-5"
								// style={{ width: "50rem" }}
							>
								<img className="card-img-top" src={element.image} alt="Card image cap" />
								<div className="card-body">
									<h5 className="card-title">{element.title}</h5>
									<p className="card-text text-truncate">{element.description}</p>
								</div>
								<div className="card-footer d-flex justify-content-center bg-white">
									{/* <Link to="/todo"> */}
									<a href={element.goTo} className="btn btn-primary">
										Find Out More!
									</a>
									{/* </Link> */}
								</div>
							</div>
							<br />
						</>
					);
				})}
		</div>
	);
};
