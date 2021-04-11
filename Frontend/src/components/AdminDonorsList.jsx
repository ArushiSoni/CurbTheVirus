import React, { Component } from 'react'
import AdminService from '../services/AdminService'
import './Stylesheet.css';

export default class ListDonorComponent extends Component {


	constructor(props) {
		super(props)
		this.state = this.initialState;
		this.addDonor = this.addDonor.bind(this);
		this.editUser = this.editUser.bind(this);
		this.logout = this.logout.bind(this);

	}

	initialState = {
		donor: []
	}




	componentDidMount() {

		AdminService.getDonors().then((res) => {

			this.setState({ donor: res.data.result });

			console.log(this.state.donor);
		});
	}

	addDonor() {
		this.props.history.push('/donor_registration');
	}

	editUser(email) {
		window.localStorage.setItem("emailId", email);
		this.props.history.push('/edit_donor');
	}
	logout() {
		alert("Goodbye, " + this.state.donor.firstName)
		window.localStorage.removeItem("emailId");
		console.log(this.setState(this.initialState));
		this.props.history.push('/');
	}

	back = (e) => {
		e.preventDefault();
		// const stateName = this.state.stateName;
		this.props.history.push('/admindashboard');
	}

	deleteUser(email) {
		AdminService.deleteUser(email).then(res => {
			alert("User Deleted Successfully")
			this.setState({ donor: this.state.donor.filter(donor => donor.email !== email) });
		})

	}

	render() {
		return (
			<div>
				{/* Banner */}
				<section id="banner">
					<h1 className="text-center" style={{ textTransform: 'uppercase', fontWeight: 525 }}>List of All Donors</h1>
					<p style={{ fontSize: 'x-large', fontWeight: 325 }}>Donate, Find Convalescent Plasma Across The Nation</p>
				</section>

				<br />
				<div className="align-center">
					<table className="table table-stripped table-bordered">
						<thead>
							<tr className="align-center">
								<th className="align-center">First Name</th>
								<th className="align-center">Last Name</th>
								<th className="align-center">Phone Number</th>
								<th className="align-center">Age</th>
								<th className="align-center">Email ID</th>
								<th className="align-center">State Name</th>
								<th className="align-center">Blood Group</th>
								<th className="align-center">Last Date of Symptom</th>
								<th className="align-center">Edit</th>
								<th className="align-center">Delete</th>
							</tr>
						</thead>
						<tbody>
							{
								this.state.donor.map(
									donor =>
										<tr >
											<td> {donor.firstName} </td>
											<td> {donor.lastName} </td>
											<td> {donor.phoneNumber} </td>
											<td> {donor.age} </td>
											<td> {donor.email} </td>
											<td> {donor.stateName}</td>
											<td> {donor.bloodGroup} </td>
											<td> {donor.lastSymptomDate} </td>
											<td>
												<div className="editpage">
													<button onClick={() => this.editUser(donor.email)}>Edit Details</button>
												</div>
											</td>
											<td>
												<div className="editpage">
													<button style={{ backgroundColor: '#E14141' }} onClick={() => this.deleteUser(donor.email)}>Delete Profile</button>
												</div>
											</td>
										</tr>
								)
							}
						</tbody>

						<tr>
							<td>
								<div className="otherbuttons">
									<button type="submit" onClick={this.back.bind(this)} >Back</button>
								</div></td>
							<td><div className="otherbuttons">
								<button type="submit" onClick={this.addDonor}>Add Donor</button>
							</div>
							</td>
							<td><div className="otherbuttons">
								<button onClick={this.logout}>Logout</button>
							</div>
							</td>
						</tr>
					</table>

				</div>


			</div>
		)
	}
}
