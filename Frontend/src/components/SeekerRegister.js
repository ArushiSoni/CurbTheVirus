import React, { Component } from 'react';
import './Stylesheet.css';
import SeekerService from '../services/SeekerService';
import { NavLink, withRouter } from 'react-router-dom';


const emailRegex = RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = formErrors => {
	let valid = true;

	Object.values(formErrors).forEach(element => {
		element.length > 0 && (valid = false);
	});
	return valid;
};

class SeekerRegister extends Component {

	constructor(props) {
		super(props)
		this.state = this.initialState;
		this.onChange = this.onChange.bind(this);
		this.inputRef = React.createRef();

	}

	initialState = {
		firstName: "",
		lastName: "",
		phoneNumber: "",
		bloodGroup: "",
		age: "",
		labConfirmedCovid: "",
		testDate: "",
		stateName: "",
		seekingRightNow: "",
		email: "",
		password: "",
		formErrors: {
			firstName: "",
			lastName: "",
			phoneNumber: "",
			bloodGroup: "",
			age: "",
			labConfirmedCovid: "",
			testDate: "",
			stateName: "",
			seekingRightNow: "",
			email: "",
			password: ""
		}
	}

	handleChange = e => {
		e.preventDefault();
		const { name, value } = e.target;
		let formErrors = this.state.formErrors;
		switch (name) {
			case 'firstName':
				formErrors.firstName = value.length < 3 ? "Minimum 3 characters required" : "";
				break;
			case 'lastName':
				formErrors.lastName = value.length < 3 ? "Minimum 3 characters required" : "";
				break;
			case 'phoneNumber':
				formErrors.phoneNumber = value.length < 10 ? "Minimum 10 digits required" : "";
				break;
			case 'age':
				formErrors.age = value.length < 1 ? "Minimum 1 digit required" : "";
				break;
			case 'email':
				formErrors.email = emailRegex.test(value) ? "" : "Invalid Email";
				break;
			case 'password':
				formErrors.password = value.length < 6 ? "minimum 6 characters required" : "";
				break;
			case 'labConfirmedCovid':
				formErrors.labConfirmedCovid = value === "0"  ? "You are not eligible to be a seeker" : "";
				break; 
			default:
				break;
		}


		this.setState({ formErrors, [name]: value }, () => console.log(this.state));
	};


	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.selectedOption })
	}


	handleSubmit = submit => {
		submit.preventDefault();
		if (formValid(this.state.formErrors)) {

			let info = {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				phoneNumber: this.state.phoneNumber,
				bloodGroup: this.bloodGroup.value,
				age: this.state.age,
				labConfirmedCovid: this.menu.value,
				testDate:this.state.testDate,
				stateName: this.state.stateName,
				seekingRightNow: this.state.seekingRightNow,
				email: this.state.email,
				password: this.state.password,
			};
			console.log('Seeker-JSON', info);
			SeekerService.createSeeker(this.state).then(res => {
				
				if (res.data.statusCodeValue === 400) {
					alert("user already exists")
				}
				else if (res.data.statusCodeValue === 202) {
					alert("User created Successfully")
					this.props.history.push('/registered_successfully');
				}
			});
		}
		else {
			alert("Please fill the form correctly!");
			console.error("Form Invalid");
		}

	};

	componentDidMount() {
		this.inputRef.current.focus()
	}


	render() {
		const { formErrors } = this.state;
		return (
			<div>

				<div className="wrappers2">
					<div className="form-wrappers">
						
						<h2 style={{fontWeight: 'bold', textAlign: 'center'}}>Seeker Registration</h2>
						
						<form onSubmit={this.handleSubmit} autoComplete="off">
							<div className="name">
								<label htmlFor="firstName">First Name</label>
								<input
									type="text"
									className={formErrors.firstName.length > 0 ? "error" : null}
									placeholder="First Name"
									name="firstName"
									required
									ref={this.inputRef}
									onChange={this.handleChange}
								/>
								{formErrors.firstName.length > 0 && (
									<span className="errorMessage">{formErrors.firstName}</span>
								)}
							</div>
							<div className="name">
								<label htmlFor="lastName">Last Name</label>
								<input
									type="text"
									className={formErrors.lastName.length > 0 ? "error" : null}
									placeholder="Last Name"
									name="lastName"
									required
									onChange={this.handleChange}
								/>
								{formErrors.lastName.length > 0 && (
									<span className="errorMessage">{formErrors.lastName}</span>
								)}
							</div>
							<div className="name">
								<label htmlFor="phoneNumber">Phone No</label>
								<input
									className={formErrors.phoneNumber.length > 0 ? "error" : null}
									placeholder="Phone Number"
									type="tel"
									name="phoneNumber"
									pattern="[0-9]{10}"
									required
									onChange={this.handleChange}
								/>
								{formErrors.phoneNumber.length > 0 && (
									<span className="errorMessage">{formErrors.phoneNumber}</span>
								)}
							</div>
							<div className="name">
								<label htmlFor="age">Your Age</label>
								<input
									type="number"
									min="18"
									max="60"
									size="2"
									className={formErrors.age.length > 0 ? "error" : null}
									placeholder="Age"
									name="age"
									required
									onChange={this.handleChange}
								/>
								{formErrors.age.length > 2 && (
									<span className="errorMessage">{formErrors.age}</span>
								)}
							</div>
							<div className="name">
								<label htmlFor="email">Email Id</label>
								<input
									className={formErrors.email.length > 0 ? "error" : null}
									placeholder="Email"
									type="email"
									name="email"
									required
									onChange={this.handleChange}
								/>
								{formErrors.email.length > 0 && (
									<span className="errorMessage">{formErrors.email}</span>
								)}
							</div>
							<div className="name">
								<label htmlFor="password">Set a new Password</label>
								<input
									className={formErrors.password.length > 0 ? "error" : null}
									placeholder="Password"
									type="password"
									name="password"
									required
									noValidate
									onChange={this.handleChange}
								/>
								{formErrors.password.length > 0 && (
									<span className="errorMessage">{formErrors.password}</span>
								)}
							</div>
							<div className="name">
								<label htmlFor="stateName">Select a state from where you would like to receive plasma</label>
								<select ref={(input) => this.stateName = input} required onChange={this.handleChange.bind(this)} name='stateName'>
									<option value="" selected disabled>Select</option>
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
								{formErrors.stateName.length > 0 && (
									<span className="errorMessage">{formErrors.stateName}</span>
								)}
							</div>
							<div className="name">
								<label htmlFor="bloodGroup">Your Blood Group</label>
								<select required ref={(input) => this.bloodGroup = input} onChange={this.handleChange.bind(this)} name='bloodGroup'>
									<option value="" selected disabled>Select</option>
									<option value="O+">O+</option>
									<option value="O-">O-</option>
									<option value="A-">A-</option>
									<option value="A+">A+</option>
									<option value="B-">B-</option>
									<option value="B+">B+</option>
									<option value="AB+">AB+</option>
									<option value="AB-">AB-</option>
								</select>
								{formErrors.bloodGroup.length > 0 && (
									<span className="errorMessage">{formErrors.bloodGroup}</span>
								)}
							</div>
							<div className="name"> 
							<label htmlFor="labConfirmedCovid">Covid confirmed by an authorized lab previously?</label>
								<select required ref={(input) => this.menu = input} name="labConfirmedCovid" onChange={this.handleChange.bind(this)}>
									<option value="" selected disabled>Select</option>
									<option value="1" >YES</option>
									<option value="0">NO</option>
								</select>
								{formErrors.labConfirmedCovid.length > 0 && (
									<span className="errorMessage">{formErrors.labConfirmedCovid}</span>
								)}
								</div>
							<div className="name">
								<label htmlFor="testDate">Last Covid Test Date</label>
									<input
										type="date"
										className={formErrors.testDate.length > 0 ? "error" : null}
										placeholder="Test Date"
										name="testDate"
										required
										onChange={this.handleChange}
									/>
									{formErrors.testDate.length > 0 && (
										<span className="errorMessage">{formErrors.testDate}</span>
									)}
							</div>

								<label htmlFor="seekingRightNow">Are you looking to get donation right now?</label>
								<select required ref={(input) => this.seekingRightNow = input} name="seekingRightNow" onChange={this.handleChange.bind(this)}>
									<option value="" selected disabled>Select</option>
									<option value="1">YES</option>
									<option value="0">NO</option>
								</select>
								{formErrors.seekingRightNow.length > 0 && (
									<span className="errorMessage">{formErrors.seekingRightNow}</span>
								)}
								
							<div className="createAccount">
								<button type="submit">Submit</button>
							</div>
							<span className="span2" style={{textAlign: 'center'}}>By clicking on Submit button, you acknowledge that you have read our <NavLink to='/guidelines' target="_blank">guidelines</NavLink> and accept the <NavLink to='/termsnconditions' target="_blank">terms and conditions</NavLink>.</span>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
export default withRouter(SeekerRegister);