import React from 'react';

const Feedback = () => {
    return (
        <div>
            {/* Banner */}
            <section id="banner">
                <h1 style={{fontWeight: 525}}>We Value Your Feedback</h1>
                <p style={{fontSize: 'x-large', fontWeight: 325}}>Donate, Find Convalescent Plasma Across The Nation</p>
            </section>

            
{/* Three */}
<section>
  <div className="inner"><br /><br />
    <h1 style={{fontSize: 'x-large', fontWeight: 'bold', textAlign: 'center'}}>Tell us about your experience of using <i>Curb The Virus</i> platform, this will help us improve our services and help serve users better in future.</h1>
    <h3 style={{fontSize: 'x-large'}}>Feedback Form</h3>
    <div className="container">
      <form action="mailto:mr.ashishupadhye@gmail.com" method="post" encType="text/plain">
        <label htmlFor="fname">Your Name</label>
        <input type="text" id="fname" name="first_name" placeholder="your name" required />
        <label htmlFor="lname">Your E-mail Address</label>
        <input type="email" id="lname" name="last_name" placeholder="e-mail address" required /><br />
        <div className="align-left ">
          <h3>Your Overall experience Using This Platform</h3>
          <div> 
            <input type="radio" defaultValue="Very Bad" id="radioFive" name="grade" />
            <label htmlFor="radioFive" className="radio">Very Bad</label>
            <input type="radio" defaultValue="Bad" id="radioFour" name="grade" />
            <label htmlFor="radioFour" className="radio">Bad</label>
            <input type="radio" defaultValue="Good" id="radioThree" name="grade" />
            <label htmlFor="radioThree" className="radio">Good</label>
            <input type="radio" defaultValue="Very Good" id="radioTwo" name="grade" />
            <label htmlFor="radioTwo" className="radio">Very Good</label>
            <input type="radio" defaultValue="Excellent" id="radioOne" name="grade" defaultChecked />
            <label htmlFor="radioOne" className="radio">Excellent</label>
          </div>
        </div>
        
        <label htmlFor="subject">Comments</label>
        <textarea id="subject" name="subject" placeholder="write your comments here" style={{height: 100}} required defaultValue={""} />
        
        <div className="createAccount" >
                        <button type="submit">Send</button>
                        </div>
        
      </form>
    </div>
  </div></section>

        </div>
    );
};

export default Feedback;