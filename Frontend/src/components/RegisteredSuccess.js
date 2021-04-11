import React from 'react';
import { NavLink} from 'react-router-dom';

const RegisteredSuccess = () => {
    return (
        <div>
             {/* Banner */}
             <section id="banner">
                <h1 style={{fontWeight: 525}}>Curb The Virus<sup>©</sup> Digital Plasma Bank</h1>
                <p style={{fontSize: 'x-large', fontWeight: 325}}>Donate, Find Convalescent Plasma Across The Nation</p>
            </section>
            <section>
                <div className="inner"><br /><br />
                <p style={{fontSize: 'x-large', textAlign: 'center'}}>
                    &nbsp;&nbsp;&nbsp;&nbsp;You have registered successfully!</p>
                <p style={{fontSize: 'x-large', textAlign: 'center'}}>
                    &nbsp;&nbsp;&nbsp;&nbsp;<NavLink to="/login" exact activeClassName="active" activeStyle={{textDecoration : 'underline'}}>Login</NavLink> to check the activity.</p>
                </div>
            </section>
            
        </div>
    );
};

export default RegisteredSuccess;