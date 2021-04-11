import React, { Component } from 'react'
import DonorService from '../services/DonorService'
import PersonService from '../services/PersonService';
import { NavLink } from 'react-router-dom';
import undertaking from '../images/UNDERTAKING.pdf';

export default class ListDonorComponent extends Component {


	constructor(props) {
		super(props)
		this.state = this.initialState;
		this.editUser = this.editUser.bind(this);
		this.logout = this.logout.bind(this);
		this.RequestsReceived = this.RequestsReceived.bind(this);
		this.DonorAcceptOrReject = this.DonorAcceptOrReject.bind(this);

	}

	initialState = {
		donor: [],
		seekers: []
	}




	componentDidMount() {

		
		if (window.localStorage.getItem("role") === "DONOR") {
			DonorService.getDonor(window.localStorage.getItem("emailId")).then((res) => {
				
				this.setState({ donor: res.data.result });
				
			});	
			this.RequestsReceived();
		}
		

	}

	RequestsReceived() {
		DonorService.requestsReceived(window.localStorage.getItem("emailId")).then(
			res => {
				console.log(res.data)
				this.setState({ seekers: res.data.result });
				console.log("seekers", this.state.seekers);
			}
		);

	}

	DonorAcceptOrReject(seekerEmail,e){
		console.log(e.target.value)
		DonorService.donorAcceptOrReject(seekerEmail,window.localStorage.getItem("emailId"), e.target.value).then(
			res=>{
				console.log("Accepted");
				this.componentDidMount()
			}
		)
	}

	ShowSeekerDetails(requestStatus,seekerEmail){
		if(requestStatus===2){
			window.localStorage.setItem("seekerEmail", seekerEmail);
			this.props.history.push("/seeker_details");
		}
		if(requestStatus===3){
			alert("you have rejected");
		}
	}

	editUser() {
		
			this.props.history.push('/edit_donor');
		
	}

	logout() {
		alert("Goodbye, " + this.state.donor.firstName)
		window.localStorage.removeItem("emailId");
		console.log(this.setState(this.initialState));
		this.props.history.push('/');
	}

	deleteUser = (e) => {
		PersonService.deletePersonDetails(window.localStorage.getItem("emailId")).then(
			res => {
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
			<div>
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
								<th>Last Date of Symptom</th>
							</tr>
						</thead>
						<tbody>
							{<tr >
									<td> {this.state.donor.firstName} </td>
									<td> {this.state.donor.lastName} </td>
									<td> {this.state.donor.phoneNumber} </td>
									<td> {this.state.donor.age} </td>
									<td> {this.state.donor.email} </td>
									<td> {this.state.donor.stateName} </td>
									<td> {this.state.donor.bloodGroup} </td>
									<td> {this.state.donor.lastSymptomDate}</td>
								</tr>
							}
						</tbody>
						
					</table>
				</div>
					<br />
				
							<br />

							<div>
					<h2 style={{fontWeight: 'bold', textAlign: 'center'}}>You Have Received The Following Request(s):</h2>
					<div>
						<table>
							<thead>
								<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Age</th>
								<th>State Name</th>
								<th>Blood Group</th>
								<th>Test last taken on</th>
								<th>Request Status</th>
								</tr>
							</thead>
							<tbody>
							{
									this.state.seekers.map(
										seeker =>
											<tr key={seeker.donorId}>
												{console.log(seeker)}
												
												<td> {seeker.firstName} </td>
												<td> {seeker.lastName} </td>
												<td> {seeker.age} </td>
												<td> {seeker.stateName} </td>
												<td> {seeker.bloodGroup} </td>
												<td> {seeker.testDate} </td>
												 {seeker.requestStatus===1? <td>Requested</td>:null}
												 {seeker.requestStatus===2? <td>Accepted</td>: null}
												 {seeker.requestStatus===3? <td>Rejected</td>: null}
											
												<td><button disabled={seeker.requestStatus===3} id="accept" style={{ backgroundColor: '#7acdf1' }} value = "2" onClick = {(e)=>this.DonorAcceptOrReject(seeker.email,e)}>Accept</button></td>
												<td><button disabled={seeker.requestStatus===2} style={{ backgroundColor: '#E14141' }} value = "3" onClick = {(e)=>this.DonorAcceptOrReject(seeker.email,e)}>Reject</button></td>
												<div>
												{seeker.requestStatus===2? <button onClick = {(e)=>this.ShowSeekerDetails(seeker.requestStatus,seeker.email)}>Show Details</button>:null}
												
												</div>
												
											</tr>
									)
								}
							</tbody>
						</table>
					</div>
				</div>
				<br />
				<div style={{ textAlign: 'center' }}>
					<button style={{ backgroundColor: '#7acdf1' }} onClick={this.logout}>Logout</button>{' '}
					<button style={{ backgroundColor: '#7acdf1' }} onClick={this.editUser}>Edit Details</button>{' '}
					<button style={{ backgroundColor: '#E14141' }} onClick={() => {if(window.confirm('Are you sure you want to delete your profile?')){this.deleteUser()};}}>Delete Profile</button>
					
				</div>
						<br />

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
