import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export default class AddContact extends React.Component {
	constructor() {
		super();

		this.state = {
			fullName: "",
			email: "",
			phone: "",
			address: ""
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div>
								<h1 className="text-center mt-5">Add a new contact</h1>
								<form>
									<div className="form-group">
										<label>Full Name</label>
										<input
											onChange={e => this.setState({ fullName: e.target.value })}
											type="text"
											className="form-control"
											placeholder="Full Name"
										/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input
											onChange={e => this.setState({ email: e.target.value })}
											type="email"
											className="form-control"
											placeholder="Enter email"
										/>
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input
											onChange={e => this.setState({ phone: e.target.value })}
											type="phone"
											className="form-control"
											placeholder="Enter phone"
										/>
									</div>
									<div className="form-group">
										<label>Address</label>
										<input
											onChange={e => this.setState({ address: e.target.value })}
											type="text"
											className="form-control"
											placeholder="Enter address"
										/>
									</div>
									<button
										type="button"
										className="btn btn-primary form-control"
										onClick={() => {
											alert("The contact has been saved");
											let person = {
												full_name: this.state.fullName,
												email: this.state.email,
												agenda_slug: "my_agenda_slug",
												address: this.state.address,
												phone: this.state.phone
											};
											actions.addContact(person);
										}}>
										save
									</button>
									<Link className="mt-3 w-100 text-center" to="/">
										or get back to contacts
									</Link>
								</form>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
