import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Navbar } from "../component/navbar";
import { Card } from "../component/card";
import { Jumbotron } from "../component/jumbotron";
import { Footer } from "../component/footer";

export const Home = () => {
	return (
		<div className="container-fluid">
			<div className="sticky-top">
				<Navbar />
			</div>
			<Jumbotron />
			{/* <Card /> */}
		</div>
	);
};
