import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
export default class UpdateContact extends React.Component {
	constructor(props) {
		super(props);

		this.obj = JSON.parse(this.props.match.params.obj);

		this.state = {
			fullName: this.obj.full_name,
			email: "",
			phone: "",
			address: ""
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let obj = JSON.parse(this.props.match.params.obj);
					return (
						<div className="container">
							<div>
								<h1 className="text-center mt-5">Add a new contact</h1>
								<form>
									<div className="form-group">
										<label>Full Name</label>
										<input
											defaultValue={this.state.fullName}
											onChange={e => this.setState({ fullName: e.target.value })}
											type="text"
											className="form-control"
											placeholder="Full Name"
										/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input
											defaultValue={obj.email}
											onChange={e => this.setState({ email: e.target.value })}
											type="email"
											className="form-control"
											placeholder="Enter email"
										/>
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input
											defaultValue={obj.phone}
											onChange={e => this.setState({ phone: e.target.value })}
											type="phone"
											className="form-control"
											placeholder="Enter phone"
										/>
									</div>
									<div className="form-group">
										<label>Address</label>
										<input
											defaultValue={obj.address}
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
											let person = {
												id: obj.id,
												full_name: this.state.fullName,
												email: this.state.email,
												agenda_slug: "my_agenda_slug",
												address: this.state.address,
												phone: this.state.phone
											};
											let o = {
												id: "256",
												agenda_slug: "my_agenda_slug",
												full_name: "jesus",
												email: "name@gmail.com",
												phone: "jesus",
												address: "jerusalem"
											};

											actions.updateContact(o);
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
UpdateContact.propTypes = {
	match: PropTypes.object
};
