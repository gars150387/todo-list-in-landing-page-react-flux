const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list: [],
			todo: []
		},
		actions: {
			getToDo: () => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/gars150387")
					.then(res => res.json())
					.then(response => setStore({ todo: response }));
				/**
									fetch().then().then(data => setStore({ "foo": data.bar }))
								*/
			},
			updateList: newList => {
				let list = getStore().list;
				setStore({ list: [...lis, newList] });
			},
			deleteElement: position => {
				let list = getStore().list;
				let newList = list.filter((item, index) => position !== index);
				setStore({ list: newList });
			}
		}
	};
};

export default getState;
