import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { ElementType } from "react";
import PropTypes from "prop-types";

const todoList = ({ element, index }) => {
	// const [list, setList] = useState([]);
	const { store, actions } = useContext(Context);
	const [edit, setEdit] = useState(false);
	const [update, setUpdate] = useState("");

	return (
		<div key={index}>
			<li className="list-group-item" key={index}>
				{element.label}
				{!edit && edit == index ? (
					<button>
						<input onClick={() => setEdit(true)} value={update} onChange={e => setUpdate(e.target.value)} />
						<i
							className="far fa-pencil-alt fa"
							onClick={() => actions.updateData({ label: update, done: false })}
						/>
					</button>
				) : (
					<button
						onClick={() => actions.deleteData(store.data.filter(item => element !== item))}
						className="btn btn-danger btn-sm m-4 text-justify-end">
						<i className="far fa-times-circle fan-2x" />
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
todoList.propTypes = {
	element: PropTypes.object,
	index: PropTypes.number
};

export default todoList;
