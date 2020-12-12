import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class ContactCard extends React.Component {
	constructor() {
		super();
		this.state = {
			// initialize your state
		};
	}

	render() {
		return (
			<li className="list-group-item">
				<div className="row w-100">
					<div className="col-12 col-sm-6 col-md-3 px-0">
						<img
							src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg"
							alt={this.props.full_name}
							className="rounded-circle mx-auto d-block img-fluid"
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
						<div className=" float-right">
							<Link to={"/edit/" + JSON.stringify(this.props.obj)}>
								<button className="btn">
									<i className="fas fa-pencil-alt mr-3" />
								</button>
							</Link>
							<button className="btn" onClick={() => this.props.onDelete()}>
								<i className="fas fa-trash-alt" />
							</button>
						</div>
						<label className="name lead">{this.props.full_name}</label>
						<br />
						<i className="fas fa-map-marker-alt text-muted mr-3" />
						<span className="text-muted">{this.props.address}</span>
						<br />
						<span
							className="fa fa-phone fa-fw text-muted mr-3"
							data-toggle="tooltip"
							title=""
							data-original-title="(870) 288-4149"
						/>
						<span className="text-muted small">{this.props.phone}</span>
						<br />
						<span
							className="fa fa-envelope fa-fw text-muted mr-3"
							data-toggle="tooltip"
							data-original-title=""
							title=""
						/>
						<span className="text-muted small text-truncate">{this.props.email}</span>
					</div>
				</div>
			</li>
		);
	}
}

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	full_name: PropTypes.string,
	address: PropTypes.string,
	phone: PropTypes.string,
	email: PropTypes.string,
	obj: PropTypes.object,
	id: PropTypes.number
};

ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
export default ContactCard;
