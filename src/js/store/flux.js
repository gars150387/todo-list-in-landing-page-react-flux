const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			data: [],
			apiResponse: ""
		},
		actions: {
			getToDo: () => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/gars15")
					.then(res => res.json())
					.then(res => setStore({ data: res }));
				/**
									fetch().then().then(data => setStore({ "foo": data.bar }))
								*/
			},
			addData: newData => {
				let data = getStore().data;
				newData = [...getStore().data, newData];

				fetch("https://assets.breatheco.de/apis/fake/todos/user/gars15", {
					method: "PUT", // or 'POST'
					body: JSON.stringify(newData), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(res => setStore({ apiResponse: res }))
					.then(() => getActions().getToDo());
			}
		},
		// updateData: newData => {
		// 	let data = getStore().data;
		// 	setStore({ data: [...data, newData] });
		// },
		deleteData: position => {
			// let data = getStore().data;
			// newData = data.filter((item, index) => position !== index);
			// setStore({ data: newData });
			fetch("https://assets.breatheco.de/apis/fake/todos/user/gars15", {
				method: "PUT", //or "POST"
				body: JSON.stringify(position), // data can be 'string' or {object}!
				headers: {
					"Content-Type": "application/json"
				}
			}).then(() => getActions().getTodos());
		}
	};
};

export default getState;
