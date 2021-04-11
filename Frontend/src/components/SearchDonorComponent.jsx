import React, { Component } from 'react'
import SeekerService from '../services/SeekerService';

export default class SearchDonorComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bloodGroup: '',
			stateName: '',
			donors: [],
			isActive:false
		}
		this.onChange = this.onChange.bind(this);
		this.searchByBloodGroup = this.searchByBloodGroup.bind(this);
		this.searchByLocation = this.searchByLocation.bind(this);
		this.searchByBoth = this.searchByBoth.bind(this);
		this.back= this.back.bind(this);
		this.displayAllDonorDetails = this.displayAllDonorDetails.bind(this);
		this.seekerSendRequestToDonor = this.seekerSendRequestToDonor.bind(this);
		this.checkRequestStatus = this.checkRequestStatus.bind(this);
		
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	componentDidMount() {
		this.displayAllDonorDetails();
		this.checkRequestStatus();
		console.log(window.localStorage.getItem("donorEmail"));
}


displayAllDonorDetails(){
	SeekerService.seekerGetAllDonors(window.localStorage.getItem("emailId"))
		.then((res) => {
			
			this.setState({donors: res.data.result});
			});

	}

	searchByBoth = (e) => {
		e.preventDefault();

		const bloodGroup = this.state.bloodGroup;
		const stateName = this.state.stateName;

		if (bloodGroup !== '' && stateName !== '') {
			SeekerService.getDonorsForSeekerByBloodGroupAndStateName(bloodGroup, stateName).then(res => {
				this.setState({ donors: res.data.result });
				if (this.state.donors.length === 0) {
					alert("No Donor found with matching criteria");
					
					this.componentDidMount()
				}
			})
		}
		


	}

	searchByBloodGroup = (e) => {
		e.preventDefault();
		const bloodGroup = this.state.bloodGroup;
		if (bloodGroup !== '') {
			SeekerService.getDonorsForSeekerByBloodGroup(bloodGroup).then(res => {
				this.setState({ donors: res.data.result });
				if (this.state.donors.length === 0) {
					alert("No Donor found with matching criteria");
					this.componentDidMount()
				}
			})
		}
	}

	searchByLocation = (e) => {
		e.preventDefault();
		const stateName = this.state.stateName;
		if (stateName !== '') {
			SeekerService.getDonorsForSeekerByStateName(stateName).then(res => {
				this.setState({ donors: res.data.result });
				if (this.state.donors.length === 0) {
					alert("No Donor found with matching criteria");
					this.componentDidMount()
				}
			})
		}
	}

	back = (e) =>{
		e.preventDefault();
		this.props.history.push('/seekerdashboard');
	}

	seekerSendRequestToDonor(donorEmail, e){
		const seekerEmail = window.localStorage.getItem("emailId");
		console.log(e.target.value)
		SeekerService.seekerSendRequestToDonor(seekerEmail, donorEmail).then(
			res => {
				if(res.data.statusCodeValue === 409){
					alert("Already Requested")
				}
				this.componentDidMount()
			}
			
		)

	}

	checkRequestStatus = (requestStatus,donorEmail) =>{
		// console.log("hello this is requestStatis");
		console.log(donorEmail);
		if (requestStatus===2){
		// 	this.setState({isActive : true})
		//console.log("you can view");
		window.localStorage.setItem("donorEmail",donorEmail);
			this.props.history.push('/donor_details');
	}
		// else{
		// 	this.setState({isActive : false})
		// }

	}

	render() {
		return (
			<div>
                {/* Banner */}
				<section id="banner">
                <h1 className="text-center" style={{ textTransform: 'uppercase', fontWeight: 525 }}>Start your search</h1>
                <p style={{fontSize: 'x-large', fontWeight: 325}}>Donate, Find Convalescent Plasma Across The Nation</p>
            </section>
				
            <div >
			<header>
				<br />
				<br />
				<h2 style={{fontWeight: 'bold', textAlign: 'center'}}> Select Your Preferable Options <br /></h2>
			</header>
			</div>
            <br />
			<form>
				<div className="container align-center">
				
					<div className="flex felx-2">
						
					<div className="name">
					<label htmlFor="bloodGroup">Select Blood Group</label>
					<select required onChange={this.onChange.bind(this)} name='bloodGroup'>
						<option value="" selected>Select</option>
						<option value="O+">O+</option>
						<option value="O-">O-</option>
						<option value="A-">A-</option>
						<option value="A+">A+</option>
						<option value="B-">B-</option>
						<option value="B+">B+</option>
						<option value="AB+">AB+</option>
						<option value="AB-">AB-</option>
					</select>

				
				<div className="editpage">
				<button type="submit" style={{ backgroundColor: '#7acdf1' }} onClick={this.searchByBloodGroup}>Search By Blood Group</button>
				</div>
				</div>
				<br />
				<div className="name" >
					<label htmlFor="stateName">Select State</label>
					<select required onChange={this.onChange.bind(this)} name='stateName'>
						<option value="" selected>Select</option>
						<option value="Andhra Pradesh">Andhra Pradesh</option>
						<option value="Arunachal Pradesh">Arunachal Pradesh</option>
						<option value="Assam">Assam</option>
						<option value="Bihar">Bihar</option>
						<option value="Chhattisgarh">Chhattisgarh</option>
						<option value="Goa">Goa</option>
						<option value="Gujarat">Gujarat</option>
						<option value="Haryana">Haryana</option>
						<option value="Himachal Pradesh">Himachal Pradesh</option>
						<option value="Jammu and Kashmir">Jammu and Kashmir</option>
						<option value="Jharkhand">Jharkhand</option>
						<option value="Karnataka">Karnataka</option>
						<option value="Kerala">Kerala</option>
						<option value="Madhya Pradesh">Madhya Pradesh</option>
						<option value="Maharashtra">Maharashtra</option>
						<option value="Manipur">Manipur</option>
						<option value="Meghalaya">Meghalaya</option>
						<option value="Mizoram">Mizoram</option>
						<option value="Nagaland">Nagaland</option>
						<option value="Odisha">Odisha</option>
						<option value="Punjab">Punjab</option>
						<option value="Rajasthan">Rajasthan</option>
						<option value="Sikkim">Sikkim</option>
						<option value="Tamil Nadu">Tamil Nadu</option>
						<option value="Telangana">Telangana</option>
						<option value="Tripura">Tripura</option>
						<option value="Uttarakhand">Uttarakhand</option>
						<option value="Uttar Pradesh">Uttar Pradesh</option>
						<option value="West Bengal">West Bengal</option>
						<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
						<option value="Chandigarh">Chandigarh</option>
						<option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
						<option value="Daman and Diu">Daman and Diu</option>
						<option value="Delhi">Delhi</option>
						<option value="Lakshadweep">Lakshadweep</option>
						<option value="Puducherry">Puducherry</option>
					</select>
				
				
				<div className="editpage">
				<button type="submit" style={{ backgroundColor: '#7acdf1' }} onClick={this.searchByLocation}>Search By Location</button>
				</div>
				</div>
				</div>
				<div className="editpage">
				<button type="submit" style={{ backgroundColor: '#7acdf1' }} onClick={this.searchByBoth}>Search By Both</button>
				</div>
				<div className="editpage">
				<button type="reset" onClick={()=>this.componentDidMount()}>Clear Selection</button>
				</div>
				

				<br />
				
				</div>
				</form>
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
						{
							this.state.donors.map(
								donor =>
								<tr key={donor.email}>
								<td> {donor.firstName} </td>
								<td> {donor.lastName} </td>
								<td> {donor.age} </td>
								<td> {donor.stateName} </td>
								<td> {donor.bloodGroup} </td>
								<td> {donor.lastSymptomDate} </td>
								{donor.requestStatus===0? <td>Not Requested</td>:null}
								{donor.requestStatus===1? <td>Requested</td>:null}
								{donor.requestStatus===2? <td>Accepted</td>: null}
								{donor.requestStatus===3? <td>Rejected</td>: null}
								{donor.requestStatus!==1 ? donor.requestStatus!==2 ? donor.requestStatus!==3 ? <td><button style={{ backgroundColor: '#7acdf1' }} value = "2" onClick = {(e)=>this.seekerSendRequestToDonor(donor.email,e)}>Request Donor</button></td> : null : null : null}
								{/* { donor.requestStatus!==1? donor.requestStatus!==2 : null ? donor.requestStatus!==3 ? <td><button style={{ backgroundColor: '#7acdf1' }} value = "2" onClick = {(e)=>this.seekerSendRequestToDonor(donor.email,e)}>Request Donor</button></td> : <td></td> } */}
							<div>
							{donor.requestStatus===2? <button style={{ backgroundColor: '#7acdf1' }} onClick = {(e)=>this.checkRequestStatus(donor.requestStatus,donor.email)}>Show Details</button>:null}
							
							</div>
								
							</tr>
							)
						}
					</tbody>
				</table>
				<br/>
				<div className="editpage align-center">
				<button  type="submit" onClick={this.back.bind(this)} >Back</button>
				</div>
				
			</div >
		)
	}

}
