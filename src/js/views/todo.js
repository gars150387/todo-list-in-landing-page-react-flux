import { element, string } from "prop-types";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { todoList } from "../component/todoList";

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
						store.data.map((element, index) => (
							// <todoList key={index} element={element} index={index} />)}
							<li className="list-group-item" key={index}>
								{element.label}
								{/* {!edit.state && edit.index ? ( */}
								<button onClick={() => setEdit({ state: true, i: index })}>
									<input onChange={e => setUpdate(e.target.value)} />
									<i
										className="fas fa-arrow-right fas-2x"
										onClick={() => actions.updateData(update, index)}
									/>
								</button>
								{/* ) : ( */}
								<button
									onClick={() => actions.deleteData(store.data.filter(item => element !== item))}
									className="btn btn-danger btn-sm m-4 text-justify-end">
									<i className="far fa-times-circle fan-2x" />
								</button>
								{/* )} */}
								{/* <button
									onClick={() => actions.deleteData(store.data.filter(item => element !== item))}
									className="btn btn-danger btn-sm m-4 text-justify-end">
									<i className="far fa-times-circle fan-2x" />
								</button> */}
							</li>
						))}
				</ul>{" "}
				<div className="card">
					<div className="card-body">{store.data !== 0 ? `${store.data.length} Item(s) left` : " "}</div>
				</div>
			</div>
		</div>
	);
};
