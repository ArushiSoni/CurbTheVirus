import React, { Component} from'react'; // eslint-disable-line no-unused-vars
import './Stylesheet.css';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

const formValid = formErrors => {
    let valid =true;
  
    Object.values(formErrors).forEach(element => {
      element.length > 0 && (valid = false);  
    });
     return valid;
 };
  
  

class Form extends Component {


    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: "",
            formErrors:{
                email: "",
                password: ""
              }
        } 
        this.inputRef= React.createRef()
    }

    handleChange = e => {
        e.preventDefault();
        const{name,value} = e.target;
        let formErrors = this.state.formErrors;
    
        switch(name){
          case 'email':
            formErrors.email = emailRegex.test(value) ? "" : "Invalid Email";
            break;
          case 'password':
            formErrors.password = value.length <6 ? "minimum 6 characters required" : "";
            break;
          default:
            break; 
        }
    
        this.setState({formErrors, [name]:value},()=>console.log(this.state));
      };

      handleSubmit = submit =>{
        submit.preventDefault();
        if(formValid(this.state.formErrors)){

          let info = {
            email: this.state.email,
            password: this.state.password
          };
		  console.log('Login-JSON',info);
        }
        else {
          console.error("Form Invalid");
        }
      };
 

    render(){
        const {formErrors}= this.state;
        return (
          <div>

          <div className="wrappers2">
            <div className="form-wrappers-login">
              <h2>Log Into Your Account</h2>
              <form onSubmit={this.handleSubmit} autocomplete="off">
                <div className="login">
                  <label htmlFor="email">Email  Id</label>
                  <input 
                    className={formErrors.email.length >0 ?"error":null} 
                    placeholder="Email" 
                    type="email" 
                    name="email" 
                    noValidate
                    onChange={this.handleChange}
                  /> 
                  {formErrors.email.length >0 && (
                     <span className="errorMessage">{formErrors.email}</span>
                  )}          
                </div>
                <div className="login">
                  <label htmlFor="password">Password</label>
                  <input
                    className={formErrors.password.length >0 ?"error":null} 
                    placeholder="Password" 
                    type="password" 
                    name="password" 
                    required
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.password.length >0 && (
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
export default Form;