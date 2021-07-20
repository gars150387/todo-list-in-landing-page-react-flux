const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			data: [],
			apiResponse: ""
		},
		actions: {
			getToDo: () => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/gars150387")
					.then(res => res.json())
					.then(res => setStore({ data: res }));
				/**
									fetch().then().then(data => setStore({ "foo": data.bar }))
								*/
			},
			addData: newData => {
				newData = [...getStore().data, newData];
				fetch("https://assets.breatheco.de/apis/fake/todos/user/gars150387", {
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
		// 	data = getStore().data;
		// 	setStore({ data: [...data, newData] });
		// },
		deleteElement: position => {
			data = getStore().data;
			newDatat = data.filter((item, index) => position !== index);
			setStore({ data: newData });
		}
	};
};

export default getState;
