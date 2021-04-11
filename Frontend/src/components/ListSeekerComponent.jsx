import React, { Component } from 'react';
import PersonService from '../services/PersonService';
import SeekerService from '../services/SeekerService';
import { NavLink } from 'react-router-dom';
import undertaking from '../images/UNDERTAKING.pdf';

export default class ListSeekerComponent extends Component {


	constructor(props) {
		super(props)
		this.state = this.initialState;
		this.createSeeker = this.createSeeker.bind(this);
		this.editUser = this.editUser.bind(this);
		this.logout = this.logout.bind(this);
		this.getDonorsForSeekerByBloodGroup = this.getDonorsForSeekerByBloodGroup.bind(this);
		this.requestsMade = this.requestsMade.bind(this);
		this.showDonorDetails = this.showDonorDetails.bind(this);
		this.cancelRequest = this.cancelRequest.bind(this);
	}

	initialState = {
		donors: [],
		seeker: []
	}




	componentDidMount() {

		console.log(window.localStorage.getItem("emailId"));
		SeekerService.getSeeker(window.localStorage.getItem("emailId")).then((res) => {
			this.setState({ seeker: res.data.result });
		});
		this.requestsMade();

	}

	requestsMade() {
		SeekerService.seekerGetAllRequestedDonors(window.localStorage.getItem("emailId"))
			.then((res) => {
				this.setState({ donors: res.data.result });
			});
	}

	createSeeker() {
		this.props.history.push('/seeker_registration');
	}

	editUser() {
		
			this.props.history.push('/edit_seeker');
		
	}
	logout() {
		alert("Goodbye, " + this.state.seeker.firstName)
		window.localStorage.removeItem("emailId");
		console.log(this.setState(this.initialState));
		this.props.history.push('/');
	}

	deleteUser() {
		PersonService.deletePersonDetails(window.localStorage.getItem("emailId")).then(
			res => {
				alert("We feel sad to see you go.")
				window.localStorage.removeItem("emailId");
				this.props.history.push('/');
			}
		)

	}
	getDonorsForSeekerByBloodGroup() {
		this.props.history.push("/search");
	}


	showDonorDetails(donorEmail) {
		// if (requestStatus === 1) {
		// 	console.log("request not accepted yet");
		// }
		// if (requestStatus === 2) {
			window.localStorage.setItem("donorEmail", donorEmail);
			this.props.history.push("/donor_details");
		// }
		// if (requestStatus === 3){
		// 	console.log("request Rejected");
		// }

	}

	// checkRequestStatus = (requestStatus,donorEmail) =>{
	// 	if (requestStatus===2){
	// 	window.localStorage.setItem("donorEmail",donorEmail);
	// 		this.props.history.push('/donor_details');
	// 	}

	// }

	cancelRequest(donorEmail){
		console.log("hello here",window.localStorage.getItem("emailId"))
		SeekerService.cancelRequest(window.localStorage.getItem("emailId"), donorEmail).then(res =>{
			alert("RequestCancelled");
			this.componentDidMount()
		})
		
	}

	render() {
		return (
			<div>
                {/* Banner */}
				<section id="banner">
                <h1 className="text-center" style={{ textTransform: 'uppercase', fontWeight: 525 }}>Hello, {this.state.seeker.firstName}</h1>
                <p style={{fontSize: 'x-large', fontWeight: 325}}>Donate, Find Convalescent Plasma Across The Nation</p>
            </section>
				
            <div >
			<header>
				<br />
				<br />
				<h2 style={{fontWeight: 'bold', textAlign: 'center'}}>{this.state.seeker.firstName} {this.state.seeker.lastName}, {this.state.seeker.age}
				({this.state.seeker.bloodGroup}) <br /></h2>
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
								<th>State Name</th>
								<th>Blood Group</th>
								<th>Last Test Date</th>
							</tr>
						</thead>
						<tbody>
							{
								<tr >
									<td> {this.state.seeker.firstName} </td>
									<td> {this.state.seeker.lastName} </td>
									<td> {this.state.seeker.phoneNumber} </td>
									<td> {this.state.seeker.age} </td>
									<td> {this.state.seeker.email} </td>
									<td> {this.state.seeker.stateName} </td>
									<td> {this.state.seeker.bloodGroup} </td>
									<td> {this.state.seeker.testDate}</td>
								</tr>
								
							}
						</tbody>
						</table>
						<br />
				<div style={{ textAlign: 'center' }}>
					<button style={{ backgroundColor: '#7acdf1' }} onClick={this.logout}>Logout</button>{' '}
					<button style={{ backgroundColor: '#7acdf1' }} onClick={this.editUser}>Edit Details</button>{' '}
					<button style={{ backgroundColor: '#7acdf1' }} onClick={this.getDonorsForSeekerByBloodGroup}>Search Donors</button>{' '}
					<button style={{ backgroundColor: '#E14141' }} onClick={() => {if(window.confirm('Are you sure you want to delete your profile?')){this.deleteUser()};}}>Delete Profile</button>{' '}
				</div>
					<br />	
					<br />	
					
				<div>
					<h2 style={{fontWeight: 'bold', textAlign: 'center'}}>You Have Made The Following Request(s):</h2>
					</div>
						
					<br />
					<table className="table table-stripped table-bordered">
					<thead>
						<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Age</th>
								<th>State Name</th>
								<th>Blood Group</th>
								<th>Last Date of Symptom</th>
								<th>Request Status</th>
						</tr>
					</thead>
					<tbody>
						{this.state.donors.map(
								donor =>
								
								<tr key={donor.email}>
								<td> {donor.firstName} </td>
								<td> {donor.lastName} </td>
								<td> {donor.age} </td>
								<td> {donor.stateName} </td>
								<td> {donor.bloodGroup} </td>
								<td> {donor.lastSymptomDate} </td>
								{donor.requestStatus===1? <td>Requested</td>:null}
								{donor.requestStatus===2? <td>Accepted</td>: null}
								{donor.requestStatus===3? <td>Rejected</td>: null}
							<div>
							{donor.requestStatus===2? <button style={{ backgroundColor: '#7acdf1' }} onClick = {()=>this.showDonorDetails(donor.email)}>Show Details</button>:null}
							{donor.requestStatus=== 1 ? <td><button style={{ backgroundColor: '#7acdf1' }} onClick={(e) => this.cancelRequest(donor.email)}>Cancel Request</button></td> : null}
							</div>
								
							</tr>
							)
						}
					</tbody>
				</table>
					<br />
					
					<div className="container">
						<header>
          <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>Undertaking Form</h3>
        </header>
        <p style={{fontWeight: 'bold', textAlign:"center"}}>Users MUST read and duly sign the completely filled undertaking form at the time donors report at plasma receiver's 
					location; BEFORE undergoing the transfusion process.</p>
        <footer>
        <div className="align-center">
          <NavLink to={undertaking} className="button special" target="_blank">Download Undertaking Form</NavLink>
          </div>
        </footer>
		</div>
				

</div>
			
		)
	}
}
