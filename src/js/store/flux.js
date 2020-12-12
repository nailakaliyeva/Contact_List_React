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
				fetch("https://3000-ee73c9f7-8cba-4a60-85b2-2e9dc6963448.ws-us03.gitpod.io/contact", {
					method: "post",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(object)
				})
					.then(() => {
						fetch("https://3000-ee73c9f7-8cba-4a60-85b2-2e9dc6963448.ws-us03.gitpod.io/contact")
							.then(response => response.json())
							.then(data => setStore({ contacts: data.reverse() }))
							.catch(err => console.error(err));
					})
					.catch(err => console.error(err));
			},
			deleteContact: id => {
				console.log("delete was successfully called for id", id);
				fetch("https://3000-ee73c9f7-8cba-4a60-85b2-2e9dc6963448.ws-us03.gitpod.io/update/" + id, {
					method: "DELETE"
				})
					.then(response => response.json())
					.then(data => {
						console.log("the data came back from the server after successfull deletion");
						setStore({ contacts: data.reverse() });
					})

					.then(window.location.reload())
					.catch(err => console.error(err));
			},
			updateContact: obj => {
				fetch("https://3000-ee73c9f7-8cba-4a60-85b2-2e9dc6963448.ws-us03.gitpod.io/update/" + obj.id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(obj)
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/my_agenda_slug")
						.then(response => response.json())
						.then(data => {
							setStore({ contacts: data.reverse() });
						});
				});
			}
		}
		//(Arrow) Functions that update the Store
		// Remember to use the scope: scope.state.store & scope.setState()
	};
};
export default getState;
