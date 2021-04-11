import React from 'react';
import { NavLink } from 'react-router-dom';

const TermsNConditions = () => {
    return (
        <div>
             {/* Banner */}
             <section id="banner">
                <h1 style={{fontWeight: 525}}>Terms and Conditions</h1>
                <p style={{fontSize: 'x-large', fontWeight: 325}}>Donate, Find Convalescent Plasma Across The Nation</p>
            </section>

        
{/* Three */}
<section>
  <div className="inner"><br /><br />
    <h1>Website Terms and Conditions of Use</h1>
    <h2 style={{fontWeight: 'bold'}}>1. Terms</h2>
    <p>By accessing this Website, accessible from www.curbthevirus.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>
    <h2 style={{fontWeight: 'bold'}}>2. Use License</h2>
    <p>Permission is granted to temporarily download one copy of the materials on G31/ e-DAC's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
    <ul>
      <li>modify or copy the materials;</li>
      <li>use the materials for any commercial purpose or for any public display;</li>
      <li>attempt to reverse engineer any software contained on G31/ e-DAC's Website;</li>
      <li>remove any copyright or other proprietary notations from the materials; or</li>
      <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
    </ul>
    <p>This will let G31/ e-DAC to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</p>
    <h2 style={{fontWeight: 'bold'}}>3. Disclaimer</h2>
    <p>All the materials on G31/ e-DAC’s Website are provided "as is". G31/ e-DAC makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, G31/ e-DAC does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
    <p>
      Curb The Virus is only a digital platform to help people looking for plasma find donors registered on its website.<br />
      G31/ e-DAC is not liable for any damages/ injuries/ harm of any sort caused to registered users due to transfusion procedures/ negligence of/ malpractices carried out by their healthcare providers/ physicians/ themselves. Safety and well-being of the plasma donors and receivers is the responsibility of themselves, and the physicians they consult with for/ during/ after the plasma donation procedure.<br />
      Whenever a donor visits the plasma seeker’s hospital/ location of their healthcare reception, a safety of eligibility test will be carried out by the plasma receiver’s physician/ doctor/ healthcare provider; only after the donor is deemed healthy and eligible to donate the plasma shall the transfusion procedure take place. Determining whether the donor-seeker pair is eligible to undergo the transfusion procedure is at sole discretion of the consultant physician/ doctor/ healthcare provider.<br />
      G31/ e-DAC and Curb The Virus does not guarantee that the donors will be found, it solely depends on how many/ if any donor(s) have registered on the platform and are within the physical proximity of the plasma seeker. 
    </p>
    <h2 style={{fontWeight: 'bold'}}>4. Limitations</h2>
    <p>G31/ e-DAC or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on G31/ e-DAC’s Website, even if G31/ e-DAC or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>
    <h2 style={{fontWeight: 'bold'}}>5. Revisions and Errata</h2>
    <p>The materials appearing on G31/ e-DAC’s Website may include technical, typographical, or photographic errors. G31/ e-DAC will not promise that any of the materials in this Website are accurate, complete, or current. G31/ e-DAC may change the materials contained on its Website at any time without notice. G31/ e-DAC does not make any commitment to update the materials.</p>
    <h2 style={{fontWeight: 'bold'}}>6. Links</h2>
    <p>G31/ e-DAC has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by G31/ e-DAC of the site. The use of any linked website is at the user’s own risk.</p>
    <h2 style={{fontWeight: 'bold'}}>7. Site Terms of Use Modifications</h2>
    <p>G31/ e-DAC may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
    <h2 style={{fontWeight: 'bold'}}>8. Your Privacy</h2>
    <p>Please read our <NavLink to="/privacy_policy" target="_blank">Privacy Policy</NavLink>.</p>
    <h2 style={{fontWeight: 'bold'}} a>9. Governing Law</h2>
    <p>Any claim related to G31/ e-DAC's Website shall be governed by the laws of in without regards to its conflict of law provisions.</p>
  </div>
</section>
        </div>
    );
};

export default TermsNConditions;