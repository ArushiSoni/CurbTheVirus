import React, { Component } from 'react'
import SeekerService from '../services/SeekerService';
import { NavLink } from 'react-router-dom';
import undertaking from '../images/UNDERTAKING.pdf';

export default class ListDonorComponent extends Component {


	constructor(props) {
		super(props)
		this.state = this.initialState;
		this.logout = this.logout.bind(this);

	}

	initialState = {
		seeker: []
	}




	componentDidMount() {


		SeekerService.getDonorInfoAfterAcceptance(window.localStorage.getItem("donorEmail")).then((res) => {
			console.log(res.data.result);

			this.setState({ seeker: res.data.result });
		});
	}

	logout() {
		alert("Goodbye, " + this.state.donor.firstName)
		window.localStorage.removeItem("emailId");
		console.log(this.setState(this.initialState));
		this.props.history.push('/');
	}

	back = (e) =>{
		e.preventDefault();
		this.props.history.push('/seekerdashboard');
	}


	render() {
		return (
			<div>
				<section id="banner">
                <h1 className="text-center" style={{ textTransform: 'uppercase', fontWeight: 525 }}>Hello, {this.state.seeker.firstName}</h1>
                <p style={{fontSize: 'x-large', fontWeight: 325}}>Donate, Find Convalescent Plasma Across The Nation</p>
            </section>
			<br />
				<h2 style={{fontWeight: 'bold', textAlign: 'center'}}>You Unlocked The Donor Details!</h2>
				<br />
				<table className="table table-stripped table-bordered">
						<thead>
							<tr>
								
								<th>First Name</th>
								<th>Last Name</th>
								<th>Phone Number</th>
								<th>Age</th>
								<th>Email ID</th>
								<th>Blood Group</th>
								<th>State</th>
								<th>Last Symptom Date</th>
								
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
									<td> {this.state.seeker.bloodGroup} </td>
									<td> {this.state.seeker.stateName} </td>
									<td> {this.state.seeker.lastSymptomDate} </td>
									
								</tr>
							
							}
						</tbody>

					</table>

				<br />
				<div className="editpage align-center">
				<button  type="submit" onClick={this.back.bind(this)} >Back</button>
				</div>
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
