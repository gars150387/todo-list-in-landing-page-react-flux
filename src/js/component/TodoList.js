import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { ElementType } from "react";
import PropTypes from "prop-types";

const TodoList = ({ element, index }) => {
	// const [list, setList] = useState([]);
	const { store, actions } = useContext(Context);
	const [edit, setEdit] = useState({ state: false, i: undefined });
	const [update, setUpdate] = useState("");

	return (
		<div key={index}>
			<li className="list-group-item" key={index}>
				<div className="ml-2 d-inline">
					{!edit.state && edit.i == index ? (
						<input
							className="ml-2"
							placeholder={element.label}
							onChange={e => setUpdate(e.target.value)}
							value={update}
						/>
					) : (
						`${element.label}`
					)}
					{!edit.state && edit.i == index ? (
						<i
							className="fas fa-arrow-right fas-2x ml-2"
							onClick={() => {
								actions.updateData(update, index), setEdit({ state: true, i: index });
							}}
						/>
					) : (
						<i className="fas fa-pencil-alt ml-2" onClick={() => setEdit({ state: false, i: index })} />
					)}
				</div>
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
	element: PropTypes.object,
	index: PropTypes.number
};

export default TodoList;
