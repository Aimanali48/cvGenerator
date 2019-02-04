import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../styles/template1.css'
class Download1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render(){ 
      console.log(this.props.location.state.data)
      const data = this.props.location.state.data
  
      return(<div className="download-container">
       <div className="template1">
               <header><h1>{data.designation}</h1>
               <p id="name">{data.name}</p>
               </header>
            <div className="profile">
            <strong>Profile</strong>
            <p className="summary">{data.summary}</p>
            </div>
             <hr/>
           <div className="design">
            <div className="data">
                <div>
               <strong>Education</strong>
               <h6>{data.college}</h6>
               <p>{data.dept} <br/>({data.duration})</p>
               </div> <br/>

               <div>
               <strong>Contact Details</strong>
              <strong> Phone:</strong>
               <p>{data.phone}</p>
               <strong> Email:</strong>
               <p>{data.email}</p>
               <strong> Address:</strong>
               <p>{data.address}</p>
               </div>
        </div>
            
         <div className="data2">
                <div>
               <strong>Work Experience</strong>
               <h6>{data.workexp}</h6>
               </div> <br/>

               <div>
               <strong>Project Showcase</strong><br/>
                <a href="/">{data.projects}</a><br/>
               </div><br/>
               <div>
               <strong>Areas of Expertise</strong>
               <h6>{data.skills}</h6>
               </div> 
          </div></div>
      
         </div>
      </div>)
    }
}
 
export default Download1;