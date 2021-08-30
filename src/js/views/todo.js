import { element, string } from "prop-types";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import TodoList from "../component/TodoList";

export const Todo = () => {
	const [todo, setTodo] = useState("");
	// const [list, setList] = useState([]);
	const { store, actions } = useContext(Context);
	const [edit, setEdit] = useState(false);
	const [update, setUpdate] = useState("");

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
				<ul className="list-group list-group-lg">
					{store.data &&
						store.data
							.map((element, index) => <TodoList key={index} element={element} index={index} />)
							.reverse()}
				</ul>{" "}
				<div className="card">
					<div className="card-body">{store.data !== 0 ? `${store.data.length} Item(s) left` : " "}</div>
				</div>
			</div>
		</div>
	);
};
