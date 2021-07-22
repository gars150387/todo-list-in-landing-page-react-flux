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
			<li className="list-group-item">
				{/* {element.label} */}
				{!edit && edit == index ? (
					(<i className="fas fa-pencil-alt" onClick={() => setEdit(true)} />,
					<input onChange={e => setUpdate(e.target.value)} value={update} />,
					(
						<button
							onClick={() => {
								actions.updateData({ label: update, done: false });
								// actions.setList([...list, todo]);
								// setTodo("");
							}}
							className="btn btn-xl btn-rounded-end btn-light"
							style={{ marginBottom: "2px", height: "15px" }}>
							Edit
						</button>
					))
				) : (
					<i className="far far-times-circle" onClick={() => setEdit(false)} />
				)}

				<button
					onClick={() => actions.deleteData(store.data.filter(item => element !== item))}
					className="btn btn-danger btn-sm m-4 text-justify-end">
					<i className="far fa-times-circle fan-2x" />
				</button>
			</li>
		</div>
	);
};
todoList.propTypes = {
	element: PropTypes.object,
	index: PropTypes.number
};

export default todoList;
