import React, { Component } from 'react'
import DonorService from '../services/DonorService'

export default class ListDonorComponent extends Component {


	constructor(props) {
		super(props)
		this.state = this.initialState;
		this.addDonor = this.addDonor.bind(this);
		this.editUser = this.editUser.bind(this);
		this.logout = this.logout.bind(this);

	}

	initialState = {
		donor: {}
	}




	componentDidMount() {
		// console.log(window.localStorage.getItem("emailId"));
		DonorService.getDonor(window.localStorage.getItem("emailId")).then((res) => {
			console.log(res.data.result);
			this.setState({ donor: res.data.result });
			console.log(window.localStorage.getItem("emailId"));
			console.log(this.state.donor);
		});
	}

	addDonor() {
		this.props.history.push('/donor_registration');
	}

	editUser() {
		this.props.history.push('/edit_donor');
	}
	logout() {
		alert("Goodbye, "+this.state.donor.firstName)
		window.localStorage.removeItem("emailId");
		console.log(this.setState(this.initialState));
		this.props.history.push('/');
	}

	deleteUser(){
		DonorService.deletePersonDetails(window.localStorage.getItem("emailId")).then(
			res =>{
				alert("We feel sad to see you go.")
					window.localStorage.removeItem("emailId");
			
				this.props.history.push('/');
			}
		)
		
	}
	render() {
		return (
			<div>
				{/* Banner */}
				<section id="banner">
                <h1 className="text-center" style={{ textTransform: 'uppercase', fontWeight: 525 }}>Hello, {this.state.donor.firstName}</h1>
                <p style={{fontSize: 'x-large', fontWeight: 325}}>Donate, Find Convalescent Plasma Across The Nation</p>
            </section>
			<div >
			<header>
				<br />
				<br />
				<h2 style={{fontWeight: 'bold', textAlign: 'center'}}>{this.state.donor.firstName} {this.state.donor.lastName}, {this.state.donor.age}
				({this.state.donor.bloodGroup}) <br /></h2>
			</header>
			</div>
            <br />
					<table className="table table-stripped table-bordered">
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Phone Number</th>
								<th>Age</th>
								<th>Email ID</th>
								<th>Password</th>
								<th>State Name</th>
								<th>Blood Group</th>
								<th>Last Date of Symptom</th>
							</tr>
						</thead>
						<tbody>
							{
								<tr >
									<td> {this.state.donor.firstName} </td>
									<td> {this.state.donor.lastName} </td>
									<td> {this.state.donor.phoneNumber} </td>
									<td> {this.state.donor.age} </td>
									<td> {this.state.donor.email} </td>
									<td> {this.state.donor.password} </td>
									<td> {this.state.donor.stateName} </td>
									<td> {this.state.donor.bloodGroup} </td>
									<td> {this.state.donor.lastSymptomDate}</td>
								</tr>
							}
						</tbody>
						<tr>
						<td><div className="otherbuttons" >
						<button onClick={this.editUser}>Edit Details</button>
						</div>
						</td>
						<td><div className="otherbuttons">
						<button onClick={this.logout}>Logout</button>
						</div>
						</td>
						<td className="otherbuttons">
						<button onClick={this.deleteUser}>Delete Profile</button>
						</td>
						<td><div className="otherbuttons">
						<button type="submit" onClick={this.addDonor}>Add Donor</button>
						</div>
						</td>
						</tr>
					</table>
				</div>


		)
	}
}
