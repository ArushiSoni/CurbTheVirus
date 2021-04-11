import React, { Component } from 'react';
import './Stylesheet.css';
import DonorService from '../services/DonorService';
import { withRouter } from 'react-router-dom';


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

class LoginComponent extends Component {


	constructor(props) {
		super(props)
		this.state = this.initialState;
		this.inputRef = React.createRef();


	}

	initialState = {
		email: "",
		password: "",
		result: {},
		formErrors: {
			email: "",
			password: ""
		}



	}

	handleChangeForSelect = e => {
		e.preventDefault();
		this.setState({ e });
	}

	handleChange = e => {
		e.preventDefault();
		const { name, value } = e.target;
		let formErrors = this.state.formErrors;

		switch (name) {
			case 'email':
				formErrors.email = emailRegex.test(value) ? "" : "Invalid Email";
				break;
			case 'password':
				formErrors.password = value.length < 6 ? "minimum 6 characters required" : "";
				break;
			default:
				break;
		}


		this.setState({ formErrors, [name]: value }, () => console.log(this.state));
	};


	handleSubmit = submit => {
		submit.preventDefault();
		if (formValid(this.state.formErrors)) {

			let info = {
				email: this.state.email,
				password: this.state.password,
			};
			console.log('Donor-JSON', info);
			DonorService.validatePerson(this.state.email, this.state.password).then(res => {
				this.setState({ result: res.data });
				window.localStorage.setItem("role", this.state.result.body);
				window.localStorage.setItem("emailId", info.email);
				const role = this.state.result.body;
				if (this.state.result.statusCodeValue === 404) {
					alert("User Not Found");
				}
				if(role === "DONOR"){
					this.props.history.push('/donordashboard');
				}
				if(role ==="SEEKER" ){
					this.props.history.push('/seekerdashboard');
				}
				if(role ==="ADMIN" ){
					this.props.history.push('/admindashboard');
				}

			});
		}
		else {
			alert("Please fill the form correctly!");
			console.error("Form Invalid");
		}

	};

	componentDidMount() {
		// this.inputRef.current.focus()
	}


	render() {
		const { formErrors } = this.state;
		return (
			<div>

				<div className="wrappers2">
					<div className="form-wrappers-login">
						<h2 style={{fontWeight: 'bold', textAlign: 'center'}}>Log Into Your Account </h2>
						<form onSubmit={this.handleSubmit} autoComplete="off">

							<div className="login">
								<label htmlFor="email">Enter your Email Id</label>
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
							<div className="login">
								<label htmlFor="password">Enter your Password</label>
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

							<div className="createAccount">
								<button type="submit">Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
export default withRouter(LoginComponent);