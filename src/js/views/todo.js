import { element } from "prop-types";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function Todo() {
	const [list, setList] = useState([]);
	const [todo, setTodo] = useState("");

	return (
		<div className="text-center mt-5">
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
					<a className="navbar-brand content-justify-center" href="#">
						Start Bootstrap
					</a>
				</Link>
				<div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link to="/">
								<button>Home</button>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<div className="list">
				<h3 className="pt-5">ToDo</h3>
				<input
					value={todo}
					className="input mt-1"
					placeholder="What needs to be done"
					onChange={e => setTodo(e.target.value)}
				/>
				<button
					onClick={() => {
						setList([...list, todo]);
						setTodo("");
					}}
					className="btn btn-xl btn-rounded-end btn-light"
					style={{ marginBottom: "8px", height: "45px" }}>
					Add
				</button>
				{list.map((element, index) => (
					<div key={index}>
						<ul className="list-group list-group-lg">
							<li className="list-group-item">
								{element}
								<button
									onClick={() => setList(list.filter(item => element !== item))}
									className="btn btn-link m-4 text-justify-end">
									<i className="far fa-times-circle fan-2x" />
								</button>
								<button
									onClick={() => setList(list.filter(item => element !== item))}
									className="btn btn-link text-justify-end">
									<i className="fas fa-pencil-alt" />
								</button>
							</li>
						</ul>{" "}
					</div>
				))}
				<div className="card">
					<div className="card-body">{list !== 0 ? `${list.length} Item(s) left` : " "}</div>
				</div>
			</div>
		</div>
	);
}
