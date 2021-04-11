import React, { Component } from 'react'
import AdminService from '../services/AdminService'
import './Stylesheet.css';

export default class AdminSeekersList extends Component {


	constructor(props) {
		super(props)
		this.state = this.initialState;
		this.addSeeker = this.addSeeker.bind(this);
		this.editUser = this.editUser.bind(this);
		this.logout = this.logout.bind(this);

	}

	initialState = {
		seeker: []
	}




	componentDidMount() {

		AdminService.getSeekers().then((res) => {

			this.setState({ seeker: res.data.result });

			console.log(this.state.seeker);
		});
	}

	addSeeker() {
		this.props.history.push('/seeker_registration');
	}

	editUser(email) {
		window.localStorage.setItem("emailId", email);
		this.props.history.push('/edit_seeker');
	}
	logout() {
		alert("Goodbye, " + this.state.seeker.firstName)
		window.localStorage.removeItem("emailId");
		console.log(this.setState(this.initialState));
		this.props.history.push('/');
	}

	back = (e) => {
		e.preventDefault();
		this.props.history.goBack();
	}

	deleteUser(email) {
		AdminService.deleteUser(email).then(res => {
			alert("User Deleted Successfully")
			this.setState({ seeker: this.state.seeker.filter(seeker => seeker.email !== email) });
		})

	}

	render() {
		return (
			<div>
				{/* Banner */}
				<section id="banner">
					<h1 className="text-center" style={{ textTransform: 'uppercase', fontWeight: 525 }}>List of All Seekers</h1>
					<p style={{ fontSize: 'x-large', fontWeight: 325 }}>Donate, Find Convalescent Plasma Across The Nation</p>
				</section>
				<br />
				<div className="align-center">

					<table className="table table-stripped table-bordered">
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Phone Number</th>
								<th>Age</th>
								<th>Email ID</th>
								<th>State Name</th>
								<th>Blood Group</th>
								<th>Last Test Date</th>
							</tr>
						</thead>
						<tbody>
							{
								this.state.seeker.map(
									seeker =>
										<tr >

											<td> {seeker.firstName} </td>
											<td> {seeker.lastName} </td>
											<td> {seeker.phoneNumber} </td>
											<td> {seeker.age} </td>
											<td> {seeker.email} </td>
											<td> {seeker.stateName} </td>
											<td> {seeker.bloodGroup} </td>
											<td> {seeker.testDate} </td>
											<td>
												<div className="editpage">
													<button onClick={() => this.editUser(seeker.email)}>Edit Details</button>
												</div>
											</td>
											<td>
												<div className="editpage">
													<button style={{ backgroundColor: '#E14141' }} onClick={() => {if(window.confirm('Are you sure you want to delete this profile?')){this.deleteUser(seeker.email)};}}>Delete Profile</button>
												</div>
											</td>
										</tr>
								)
							}
						</tbody>
						<tr>
							<td>
								<div className="otherbuttons" style={{ textAlign: 'center' }}>
									<button type="submit" onClick={this.back.bind(this)} >Back</button>
								</div></td>
							<td><div className="otherbuttons">
								<button type="submit" onClick={this.addSeeker}>Add Seeker</button>
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
