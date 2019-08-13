import React from "react";
import { Link } from "react-router-dom";

import ContactCard from "../component/ContactCard.js";
import Modal from "../component/Modal";
import { Context } from "../store/appContext.js";

export default class Contacts extends React.Component {
	constructor() {
		super();
		this.state = {
			id: "",
			showModal: false
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div>
								<p className="text-right my-3">
									<Link className="btn btn-success" to="/add">
										Add new contact
									</Link>
								</p>
								<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
									<ul className="list-group pull-down" id="contact-list">
										{store.contacts &&
											store.contacts.map((item, index) => {
												return (
													<ContactCard
														full_name={item.fullName}
														phone={item.phone}
														address={item.address}
														email={item.email}
														key={index}
														onDelete={() => {
															this.setState({ showModal: true, id: item.id });
															console.log("whyyyy");
														}}
													/>
												);
											})}
									</ul>
								</div>
							</div>
							<Modal
								id={this.state.id}
								show={this.state.showModal}
								onClose={() => this.setState({ showModal: false })}
							/>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
