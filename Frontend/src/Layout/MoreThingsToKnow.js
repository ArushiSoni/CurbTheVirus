import React from 'react';
import {NavLink} from 'react-router-dom';
import three from '../images/hiw16.png';
import four from '../images/hiw04.png';
import undertaking from '../images/UNDERTAKING.pdf';

const MoreThingsToKnow = () => {
    return (
        <div>
{/*             
            <section id="three" className="wrapper special">
                <div className="inner">
                <header className="align-center">
                    <h2 style={{fontWeight: 'bold'}}>Important Things To Know</h2>
                </header>
                <div className="flex flex-1">
                    <article>
                    <div className="image fit">
                        <img src={three} alt="Official Guidelines" style={{width: 'auto', height: '400px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />
                    </div>
                    <header>
                        <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>Official Guidelines</h3>
                    </header>
                    <p style={{fontWeight: 'bold'}}>The Mistry of Health and Family Welfare of India has issued a circular, defining a set of guidlines to be followed in a CPT therapy. Read this before your visit to the donation center.</p>
                    <footer>
    <NavLink 
    to={{ pathname: "https://covid19.karnataka.gov.in/storage/pdf-files/Circular-Guidelines%20for%20COVID-19%20Convalscent%20Plasma%20Therapy.pdf"}} 
    className="button special" target="_blank">Learn More</NavLink>
                    </footer>
                    </article>
                </div>
                </div>
            </section> */}




{/* Three */}
<section id="three" className="wrapper special">
  <div className="inner">
    <header className="align-center">
      <h2 style={{fontWeight: 'bold'}}>Important Things To Know</h2>
    </header>
    <div className="flex flex-2">
            <article>
                    <div className="image fit">
                        <img src={three} alt="Official Guidelines" style={{width: '300px', height: '274px', display: 'block', margin:'auto'}} />
                    </div>
                    <header>
                        <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>Official Guidelines</h3>
                    </header>
                    <p style={{fontWeight: 'bold',  textAlign:"center"}}>The Mistry of Health and Family Welfare of India has issued a circular, defining a set of guidlines to be followed in a CPT therapy. Read this before your visit to the donation center.</p>
                    <footer>
                        <div className="align-center">
                    <NavLink 
                    to={{ pathname: "https://covid19.karnataka.gov.in/storage/pdf-files/Circular-Guidelines%20for%20COVID-19%20Convalscent%20Plasma%20Therapy.pdf"}} 
                    className="button special" target="_blank" >Learn More</NavLink>
                    </div>
                    </footer>
            </article>
            <article>
        <div className="image fit">
          <img src={four} alt="Official Guidelines" style={{width: '250px', height: '250px', display: 'block', margin: 'auto'}} /><br />
        </div>
        <header>
          <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>Undertaking Form</h3>
        </header>
        <p style={{fontWeight: 'bold', textAlign:"center"}}>After reading and agreeing to the terms of service; all parties, including The Seeker/ their guardian, The Donor, The Consulting Doctor/ Healthcare Provider must sign the undertaking form</p>
        <p style={{fontWeight: 'bold',  textAlign:"center"}}>The duly filled and signed form shall be uploaded to <a href="mailto: mr.ashishupadhye@gmail.com">mr.ashishupadhye@gmail.com</a></p>
        <footer>
        <div className="align-center">
          <NavLink to={undertaking} className="button special" target="_blank">Download Undertaking Form</NavLink>
          </div>
        </footer>
      </article>
    </div>
  </div>
</section>
        </div>
    );
};

export default MoreThingsToKnow;