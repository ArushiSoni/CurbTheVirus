
import React,{ Component } from 'react';

import { Link } from 'react-router-dom';

export default class admindashboard extends Component {

  constructor(props) {
		super(props)
		this.state = this.initialState;
		
		this.logout = this.logout.bind(this);

	}

	initialState = {
		seeker: []
	}


  logout() {
		alert("Goodbye!!!")
		window.localStorage.removeItem("emailId");
		console.log(this.setState(this.initialState));
		this.props.history.push('/');
	}

render(){
  return (
    <div>
      {/* Banner */}
      <section id="banner">
        <h1 style={{ fontWeight: 525 }}>Welcome, Administrator</h1>
        <p style={{ fontSize: 'x-large', fontWeight: 325 }}>What would you like to do today ?</p>
      </section>

      {/* One */}
      <section id="one" className="wrapper">
        <div className="inner">
          <div className="flex flex-2">
            <article style={{ textAlign: 'center' }}>
              <header>
                <h3 style={{ fontWeight: 'bold' }}>Get Registered Donors List<br /></h3>
              </header>
              <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Know about the plasma Donors</p><br />
              <footer>
                <Link to='/admin_donorslist' className="button special">
                  Show Registered Donors
                </Link>

              </footer>
            </article>

            <article style={{ textAlign: 'center' }}>
              <header>
                <h3 style={{ fontWeight: 'bold' }}>Get Registered Seekers List<br /></h3>
              </header>
              <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Know about the plasma Seekers</p><br />
              <footer>
                <Link to='/admin_seekerslist' className="button special">
                  Show Registered Seekers
                </Link>

              </footer>
            </article>

          </div>
        </div>
      </section>
    <br />
    <div className="align-center">
    
      <div className="editpage">
								<button  onClick={this.logout}>Logout</button>
							</div>
              </div>
   
    </div>
  );
};

}

