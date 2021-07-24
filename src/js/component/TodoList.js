import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { ElementType } from "react";
import PropTypes from "prop-types";

const TodoList = ({ element, index }) => {
	// const [list, setList] = useState([]);
	const { store, actions } = useContext(Context);
	const [edit, setEdit] = useState(false);
	const [update, setUpdate] = useState("");

	return (
		<div key={index}>
			<li className="list-group-item" key={index}>
				{element.label}
				{!edit && edit == index ? (
					<i className="fas fa-pencil-alt" onClick={() => setEdit({ state: true, i: index })} />
				) : (
					""
				)}

				{edit && edit == index ? (
					<button onClick={() => setEdit({ state: true, i: index })}>
						<input onChange={e => setUpdate(e.target.value)} />
						<i className="fas fa-arrow-right fas-2x" onClick={() => actions.updateData(update, index)} />
					</button>
				) : (
					<button onClick={() => setEdit({ state: true, i: index })}>
						<input onChange={e => setUpdate(e.target.value)} />
						<i className="fas fa-arrow-right fas-2x" onClick={() => actions.updateData(update, index)} />
					</button>
				)}

				<button
					onClick={() => actions.deleteData(store.data.filter(item => element !== item))}
					className="btn btn-danger btn-sm m-4 text-justify-end">
					<i className="far fa-times-circle fan-2x" />
				</button>
			</li>{" "}
		</div>
	);
};
TodoList.propTypes = {
	element: PropTypes.obj,
	index: PropTypes.number
};

export default TodoList;
