import React from 'react';
import MoreThingsToKnow from './MoreThingsToKnow';
import SeekerRegistration from '../components/SeekerRegister';

const SeekerReg = () => {
    return (
        <div>
            {/* Banner */}
            <section id="banner">
                <h1 style={{fontWeight: 525}}>Register as<br />Convalescent Plasma Seeker</h1>
                <p style={{fontSize: 'x-large', fontWeight: 325}}>Find eligible plasma donors available near you right now</p>
            </section>


            {/* Section */}
            <section id="one" className="wrapper">
                <div className="inner">
                    <div className="flex flex-1">
                        <article>
                        {/* <header>
                            <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>INSERT THE SEEKER REGISTRATION FORM HERE<br /></h3>
                        </header> */}
                        <p style={{fontWeight: 'bold', textAlign: 'justify'}}>Tell us a little about yourself and your needs. We can then help you find a list of eligible, available plasma donors near you and help you contact them.<br />
                            It's free, quick and easy.</p>
                            <SeekerRegistration />
                        </article>
                    </div>
                </div>
            </section>
            
            <MoreThingsToKnow />
        </div>
    );
};

export default SeekerReg;