import { element } from "prop-types";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Todo = () => {
	const [todo, setTodo] = useState("");
	// const [list, setList] = useState([]);
	const { store, actions } = useContext(Context);
	const [edit, setEdit] = useState(true);
	const todoList = store.data;

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
				<h3 className="pt-5">To-Do List</h3>
				<input
					value={todo}
					className="input mt-1"
					placeholder="What needs to be done"
					onChange={e => setTodo(e.target.value)}
				/>
				<button
					onClick={() => {
						actions.addData({ label: todo, done: false });
						// actions.setList([...list, todo]);
						// setTodo("");
					}}
					className="btn btn-xl btn-rounded-end btn-light"
					style={{ marginBottom: "8px", height: "45px" }}>
					Add
				</button>
				{store.data.map((element, index) => (
					<div key={index}>
						<ul className="list-group list-group-lg">
							<li className="list-group-item">
								{element.label}
								{/* {!edit ? (
									<i className="fas fa-pencil-alt" onClick={() => setEdit(true)} />
								) : (
									<i className="fas fa-pencil-alt" onClick={() => setEdit(false)} />
								)} */}
								<button
									onClick={() => actions.updateData(todoList.at((todoList[index] = element)))}
									className="btn btn-link text-justify-end">
									<i className="fas fa-pencil-alt" />
								</button>
								<button
									onClick={() => actions.deleteData(todoList.filter(item => element !== item))}
									className="btn btn-danger btn-sm m-4 text-justify-end">
									<i className="far fa-times-circle fan-2x" />
								</button>
							</li>
						</ul>{" "}
					</div>
				))}
				<div className="card">
					<div className="card-body">{todoList !== 0 ? `${todoList.length} Item(s) left` : " "}</div>
				</div>
			</div>
		</div>
	);
};
