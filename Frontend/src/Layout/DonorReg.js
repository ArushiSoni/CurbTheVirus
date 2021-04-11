import React from 'react';
import MoreThingsToKnow from './MoreThingsToKnow';
import DonorRegister from '../components/DonorRegister';

const DonorReg = () => {
    return (
        <div>
            {/* Banner */}
            <section id="banner">
                <h1 style={{fontWeight: 525}}>Register as<br />Convalescent Plasma Donor</h1>
                <p style={{fontSize: 'x-large', fontWeight: 325}}>People looking for plasma can then request to contact you</p>
            </section>

            {/* Form */}
            <section id="one" className="wrapper">
                <div className="inner">
                    <div className="flex flex-1">
                        <article>
                        {/* <header>
                            <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>INSERT THE DONOR REGISTRATION FORM HERE<br /></h3>
                        </header> */}
                        <p style={{fontWeight: 'bold', textAlign: 'justify'}}>Fill out a simple form telling us a little bit about yourself. Once you are succesfully registered as an eligible donor, plasma seekers will be able to request to contact you for your help.<br />
                            It's free, quick and easy.</p>
                            <DonorRegister />
                        </article>
                    </div>
                </div>
            </section>

            <MoreThingsToKnow />
        </div>
    );
};

export default DonorReg;