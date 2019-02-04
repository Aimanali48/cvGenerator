import React, { Component } from 'react';
import '../styles/template1.css'
class Blue extends Component {
   
    render() { 
        return (<React.Fragment>
             <div className="template1">
               <header><h1>WEB DEVELOPER</h1>
               <p id="name">Jequaline Thompson</p>
               </header>
            <div className="profile">
            <strong>Profile</strong>
            <p className="summary">Lorem ipsum dolor sit amet,  nec ei labore iriure complectitur, mutat augue legimus sit in. Consectetuer consequuntur vix an, ius eu partem possit argumentum, dolor doctus consetetur vix te. Cum dolor signiferumque an, pri errem epicurei atomorum ei. Reque reprimique sed an, cum cu noster deserunt democritum. .</p>
            </div>
             <hr/>
           <div className="design">
            <div className="data">
                <div>
               <strong>Education</strong>
               <h6>University of fleroda</h6>
               <p>Bachlors in Computer Systems Engineering <br/>(2017-2021)</p>
               </div> <br/>

               <div>
               <strong>Contact Details</strong>
              <strong> Phone:</strong>
               <p>0321-XXXXXX</p>
               <strong> Email:</strong>
               <p>someone@gmail.com</p>
               <strong> Address:</strong>
               <p>h:11B ,Baker street</p>
               </div>
        </div>
            
         <div className="data2">
                <div>
               <strong>Work Experience</strong>
               <h6>Lorem ipsum amir demon</h6>
               <p>Or Fresh</p>
               </div> <br/>

               <div>
               <strong>Project Showcase</strong><br/>
                <a href="/">Link</a><br/>
                <a href="/">Link</a><br/>
                <a href="/">Link</a>
               </div><br/>
               <div>
               <strong>Areas of Expertise</strong>
               <h6>Javascript , java , python</h6>
               </div> 
          </div></div>
      
         </div>
        </React.Fragment>);
    }
}
 
export default Blue;