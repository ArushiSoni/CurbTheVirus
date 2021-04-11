import React from 'react';
import { Link } from 'react-router-dom';
import ashish from '../images/img04.jpg';
import arushi from '../images/img02.jpg';
import harshal from '../images/img01.jpeg';
import mahavir from '../images/img03.jfif';
import MoreThingsToKnow from './MoreThingsToKnow';


const Home = () => {
  return (
    <div>
      {/* Banner */}
      <section id="banner">
        <h1 style={{ fontWeight: 525 }}>Curb The Virus<sup>©</sup> Digital Plasma Bank</h1>
        <p style={{ fontSize: 'x-large', fontWeight: 325 }}>Donate, Find Convalescent Plasma Across The Nation</p>
      </section>

      {/* One */}
      <section id="one" className="wrapper">
        <div className="inner">
          <div className="flex flex-3">
            <article>
              <header>
                <h3 style={{ fontWeight: 'bold' }}>Find Convalescent Plasma<br /></h3>
              </header>
              <p style={{ fontWeight: 'bold', textAlign: 'justify' }}>Create a free account, and find available, eligible plasma donors near you.</p><br />
              {/* <footer> */}
              <Link to='/seeker_registration' className="button special">
                Register Now
                </Link>

              {/* </footer> */}
            </article>
            <article>
              <header>
                <h3 style={{ fontWeight: 'bold' }}>Donate Convalescent Plasma<br /></h3>
              </header>
              <p style={{ fontWeight: 'bold', textAlign: 'justify' }}>Register as a plasma donor, people looking for plasma can then find you, and request to contact you.</p>
              <footer>
                <Link to="/donor_registration" className="button special">Register Now</Link>
              </footer>
            </article>
            <article>
              <header>
                <h3 style={{ fontWeight: 'bold' }}>How Does It Work ?<br /></h3>
              </header>
              <p style={{ fontWeight: 'bold', textAlign: 'justify' }}>See how <i>Curb The Virus</i> platform works and make the best use of it.</p><br />
              <footer>
                <Link to="/faq" className="button special">Learn More</Link>
              </footer>
            </article>
          </div>
        </div>
      </section>


      {/* Two */}
      <section id="two" className="wrapper style1 special">
        <div className="inner">
          <header>
            <h2 style={{ fontWeight: 'bold' }}>Testimonials</h2>
            <p style={{ fontSize: 'large' }}>Take a look at people's experiences of using this platform, and the overall process. </p>
          </header>
          <div className="flex flex-4">
            <div className="box person">
              <div className="image round">
                <img src={ashish} alt="Person 1" />
              </div>
              <p>"Pretty simple structure to follow".</p>
              <h3>- Ashish Upadhye</h3>
              <p>Donated plasma at Mumbai, MH</p>

            </div>
            <div className="box person">
              <div className="image round">
                <img src={arushi} alt="Person 2" />
              </div>
              <p>"Feeling proud to have contributed to my social responsibility".</p>
              <h3>- Arushi Soni</h3>
              <p>Donated plasma at Jaipur, RJ</p>
            </div>
            <div className="box person">
              <div className="image round">
                <img src={harshal} alt="Person 3" />
              </div>
              <p>"This app is a blessing. Being able to find and contact people for plasma was a fast".</p>
              <h3>- Harshal Sonawane</h3>
              <p>Found a donor at Dhule, MH</p>
            </div>
            <div className="box person">
              <div className="image round">
                <img src={mahavir} alt="Person 4" />
              </div>
              <p>"A lot of requests came, wish I could donate more !".</p>
              <h3>- Mahavir Kathed</h3>
              <p>Donated plasma at Ahmednagar, MH</p>
            </div>
          </div>
        </div>
      </section>

      <MoreThingsToKnow />

    </div>


  );
};

export default Home;