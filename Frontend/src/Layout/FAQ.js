import React from 'react';
import { Link } from 'react-router-dom';
import one from '../images/hiw01.png';
import two from '../images/hiw02.png';
import three from '../images/hiw03.png';
import four from '../images/hiw04.png';
import five from '../images/hiw05.png';
import six from '../images/hiw06.png';
import seven from '../images/hiw07.png';
import eight from '../images/hiw08.png';
import nine from '../images/hiw09.png';
import MoreThingsToKnow from './MoreThingsToKnow';

const FAQ = () => {
    return (
        <div>
             <section id="banner">
                <h1 style={{fontWeight: 525}}>How does it work ?</h1>
                <p style={{fontSize: 'x-large', fontWeight: 325}}>Curb The Virus is a digiral platform for<br />
                donating &amp; finding convalescent plasma<br />
                Using this platform is as easy as following few steps !
                </p>
            </section>

            {/* Section 1-3 */}
            <section id="one" className="wrapper">
                <div className="inner">
                    <div className="flex flex-3">
                        <article>
                        <img src={one} style={{width: 'auto', height: '150px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt="Person 1" /><br />
                        <header>
                            <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>| 1 |<br />Register Your Profile</h3>
                        </header>
                        <p style={{fontWeight: 'bold', textAlign: 'center'}}>Register yourself as a <i>Donor</i> or <i>Seeker</i> of Convalescent Plasma</p>
                        </article>
                        <article>
                        <img src={two} style={{width: 'auto', height: '150px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt="Person 1" /><br />
                        <header>
                            <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>| 2 |<br />Be Found</h3>
                        </header>
                        <p style={{fontWeight: 'bold', textAlign: 'center'}}>Plasma seekers can then see a list of <i>eligible</i> and <i>available</i> plasma donors near them</p>
                        </article>
                        <article>
                        <img src={three} style={{width: 'auto', height: '150px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt="Person 1" /><br />
                        <header>
                            <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>| 3 |<br />Contact Donors</h3>
                        </header>
                        <p style={{fontWeight: 'bold', textAlign: 'center'}}>Seekers can send a request to <i>Donors</i> to contact them</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Section 4-6 */}
            
                <div className="inner wrapper">
                <div className="flex flex-3">
                    <article>
                    <img src={five} style={{width: 'auto', height: '150px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt="Person 1" /><br />
                    <header>
                        <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>| 4 |<br />Donors Accept, Visit The Hospital</h3>
                    </header>
                    <p style={{fontWeight: 'bold', textAlign: 'center'}}>When a donor accepts a seeker's request, they can then visit the seeker's hospital with an <i>undertaking form</i></p>
                    </article>
                    <article>
                    <img src={four} style={{width: 'auto', height: '150px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt="Person 1" /><br />
                    <header>
                        <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>| 5 |<br />Duly Sign The Form<br /></h3>
                    </header>
                    <p style={{fontWeight: 'bold', textAlign: 'center'}}>After reading and agreeing to the terms of service; all parties, including<br />
                        <i>The Seeker/ their guardian</i><br />
                        <i>The Donor</i><br />
                        <i>The Consulting Doctor/ Healthcare Provider</i><br />
                        Must sign the undertaking form
                    </p>
                    </article>
                    <article>
                    <img src={nine} style={{width: 'auto', height: '150px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt="Person 1" /><br />
                    <header>
                        <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>| 6 |<br />Safety, Eligibility Checkup</h3>
                    </header>
                    <p style={{fontWeight: 'bold', textAlign: 'center'}}>Consulting doctor will examine both the donor and seeker to determine if they are eligible to undergo the procedure safely</p>
                    </article>
                    </div>
                 </div>
            


            {/* Section 7-9 */}
            <section id="one" className="wrapper">
                <div className="inner">
                <div className="flex flex-3">
                    <article>
                    <img src={seven} style={{width: 'auto', height: '150px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt="Person 1" /><br />
                    <header>
                        <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>| 7 |<br />Undergo The Procedure</h3>
                    </header>
                    <p style={{fontWeight: 'bold', textAlign: 'center'}}>The participants will then undergo the transfusion procedure, under the supervision of a doctor</p>
                    </article>
                    <article>
                    <img src={six} style={{width: 'auto', height: '150px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt="Person 1" /><br />
                    <header>
                        <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>| 8 |<br />Upload The Undertaking Form</h3>
                    </header>
                    <p style={{fontWeight: 'bold', textAlign: 'center'}}>After the completion of the procedure, both <i>Donors</i> and <i>Receivers</i> will retrieve the undertaking forms, and upload them to<br />
                        <b><i>contact@curbthevirus.com</i></b></p>
                    </article>
                    <article>
                    <img src={eight} style={{width: 'auto', height: '150px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt="Person 1" /><br />
                    <header>
                        <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>| 9 |<br />Share Your Experience</h3>
                    </header>
                    <p style={{fontWeight: 'bold', textAlign: 'center'}}>You did great ! now let us know about your experience so we can continue to improve, and provide smooth, hasslefree services to users like you !</p>
                    </article>
                </div>
                </div>
            </section>

            {/* Seeking forms */}
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

            <MoreThingsToKnow />
        </div>
    );
};

export default FAQ;