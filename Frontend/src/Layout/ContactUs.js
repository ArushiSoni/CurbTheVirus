import React from 'react';

const ContactUs = () => {
    return (
        <div>
            {/* Banner */}
            <section id="banner">
                <h1 style={{fontWeight: 525}}>Contact Us</h1>
                <p style={{fontSize: 'x-large', fontWeight: 325}}>Donate, Find Convalescent Plasma Across The Nation</p>
            </section>


            {/* Third */}

            <section>
                <div className="inner"><br /><br />
                    <h1 style={{fontSize: 'x-large', fontWeight: 'bold', textAlign: 'center'}}>Getting in touch with us is easy!</h1>
                    <p style={{fontSize: 'medium', textAlign: 'justify'}}>Firstly, we have created a dedicated FAQs section here to answer any questions you may have about Curb The Virus platform or about the convalescent plasma transfusion therapy.</p>
                    <p style={{fontSize: 'medium', textAlign: 'justify'}}>Get in touch with us by emailing <a href="mailto: mr.ashishupadhye@gmail.com"><i><b>mr.ashishupadhye@gmail.com</b></i></a> we assure a response within 48 hours!<br />
                    Please be sure to double-check your junk/spam and promotions folder for our email as sometimes your email provider can filter our response to these folders.</p>
                    <h1 style={{fontSize: 'x-large', fontWeight: 'bold', textAlign: 'center'}}>Have a question? We're here to help.</h1>
                    <h3 style={{fontSize: 'x-large'}}>Contact Form</h3>
                    <div className="container">
                    <form action="mailto:mr.ashishupadhye@gmail.com" method="post" encType="text/plain">
                        <label htmlFor="fname">Your Name</label>
                        <input type="text" id="fname" name="firs_tname" placeholder="your name" required />
                        <br /><br />
                        <label htmlFor="lname">Your E-mail Address</label>
                        <input type="email" id="lname" name="last_name" placeholder="e-mail address" required /><br />
                        <br />
                        <label htmlFor="subject">Comments</label>
                        <textarea id="subject" name="subject" placeholder="write your comments here" style={{height: 100}} required defaultValue={""} />
                        <br />
                        <div className="createAccount" >
                        <button type="submit">Send</button>
                        </div>
                    </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactUs;