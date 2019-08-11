const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			addContact: object => {
				// let store = getStore();
				// setStore({ contacts: store.contacts.concat(object) });
				fetch("https://assets.breatheco.de/apis/fake/contact", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(object)
				});
			}
		}
		//(Arrow) Functions that update the Store
		// Remember to use the scope: scope.state.store & scope.setState()
	};
};
export default getState;
