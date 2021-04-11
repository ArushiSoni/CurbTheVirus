import React from 'react';
import '../App.css';

const about_us = () => {
    return (
        <div>
            {/* Banner */}
            <section id="banner">
                <h1 style={{fontWeight: 525}}>About Us</h1>
                <p style={{fontSize: 'x-large', fontWeight: 325}}>Our sole mission is to help save lives affected by Covid-19</p>
            </section>

            {/* Section */}
             <section>
                <div className="inner"><br /><br />
                <p style={{fontSize: 'large', textAlign: 'justify'}}>&nbsp;&nbsp;&nbsp;&nbsp;Since the time SARS CoV-2 hit India last summer, there have been countless deaths and subsequently, countless attempts of developing vaccines or other methods to save lives. One of the promising treatments turned out to be Convalescent Plasma Transfusion therapy. A person affected by Covid-19 may be able to start building antibodies within, with the help of infusion of convalescent plasma, derived from a person fully recovered from Covid-19.</p>
                <p style={{fontSize: 'large', textAlign: 'justify'}}>&nbsp;&nbsp;&nbsp;&nbsp;This treatment, even though proven effective to a satisfactory level, remains to be a relatively unorganized matter. Hence, paving the need of a centralized platform, to connect convalescent plasma seekers with willing donors, Curb The Virus web app aims to do exactly that.</p>
                <p style={{fontSize: 'large', textAlign: 'justify'}}>&nbsp;&nbsp;&nbsp;&nbsp;This project is nothing but a web-based platform that lets both plasma seekers and willing plasma donors register themselves onto the platform. Then, according to a specific set of rules, creates a list of donor-seeker pairs. An Administrator can then verify the possible pairs, approve the pairs and help make further arrangements for the therapy; including legal paperwork, coordination with the hospitals/ healthcare organizations, and the users.</p>
                </div>
            </section>
        </div>
    );
};

export default about_us;