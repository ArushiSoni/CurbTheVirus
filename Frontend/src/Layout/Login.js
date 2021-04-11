import React from 'react';
import { Link } from 'react-router-dom';
//mport Form from '../components/Form';
import Logins from '../components/Login';

const Login = () => {
    return (
        <div>
            {/* Banner */}
            <section id="banner">
                {/* <h1 style={{fontWeight: 525}}>Log In</h1> */}

				<div className="flex flex-1">
					<Logins />
				 </div>
            </section>

            {/* Section */}
            <section id="one" className="wrapper">
                <div className="inner">
                <div className="flex flex-2">
                    <article>
                    <header>
                        <h3 style={{fontWeight: 'bold'}}>Register as a Plasma Seeker<br /></h3>
                    </header>
                    <p style={{fontWeight: 'bold', textAlign: 'justify'}}>Create a free account, and find available, eligible plasma donors near you.</p><br />
                    <footer>
                        <Link to="/seeker_registration" className="button special">Register Now</Link>
                    </footer>
                    </article>
                    <article>
                    <header>
                        <h3 style={{fontWeight: 'bold'}}>Register as a Plasma Donor<br /></h3>
                    </header>
                    <p style={{fontWeight: 'bold', textAlign: 'justify'}}>Register as a plasma donor, people looking for plasma can then find you, and request to contact you.</p>
                    <footer>
                        <Link to="donor_registration" className="button special">Register Now</Link>
                    </footer>
                    </article>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Login;