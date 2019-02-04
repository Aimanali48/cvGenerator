import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import '../styles/template1.css'
import Blue from './blue';
class Template1 extends Component {
constructor(){
  super()
  this.state = {
      data:[]
  }
}

handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
}


componentDidMount() {
  this.getAll()
}

 getAll = () => {
     fetch('/data/api')
     .then(res => res.json())
     .then(data => this.setState({data}))
     .catch(err=>{console.log(err)})

 }



handleSubmit = (e) => {
 e.preventDefault()
  let obj = this.state
 // console.log(name,designation,summary,college,duration,dept,address,email,phone,skills,workexp,projects)

//Fetch Http POST Request
fetch("/data/api", {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  method: "POST",
  body: JSON.stringify(obj)
}).then(()=>{this.getAll()})


this.props.history.push({
  pathname: '/download/resume/',
  state: { data:obj}
})
}

    render()  { 
        return (<React.Fragment>
                <hr/>
            <div className="flex-container">
                <div className="side-form">

                <Form onSubmit={this.handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Name:</Label>
              <Input type="text" name="name" onChange={this.handleChange} required/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Designation</Label>
              <Input type="text" name="designation"  required onChange={this.handleChange} placeholder="Web Developer, Photgrapher, Database Administrator etc.." />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>Executive Summary:</Label>
            <Input type="textarea" name="summary"  required onChange={this.handleChange} placeholder="Describe yourself.. ." />
        </FormGroup>
    
          <Label>Acadmic Profile</Label>
        
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>University/college</Label>
              <Input type="text" name="college"  required onChange={this.handleChange} />
            </FormGroup>
            </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Duration</Label>
              <Input type="text" name="duration"  required onChange={this.handleChange} placeholder="2017-2021"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Dept:</Label>
              <Input type="text" name="dept"  required onChange={this.handleChange} />
            </FormGroup>  
          </Col>
        </Row>

        <Label>Contact  Details</Label>
         <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Address:</Label>
              <Input type="text" name="address"  required onChange={this.handleChange}/>
            </FormGroup>
            </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Email:</Label>
              <Input type="text" name="email"  required  onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Phone:</Label>
              <Input type="text" name="phone"   required onChange={this.handleChange} />
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup>
          <Label>Skills:</Label>
            <Input type="textarea" name="skills"  required onChange={this.handleChange} />
        </FormGroup>


        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Work Experience:</Label>
              <Input type="text" name="workexp"  required onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Projects Links</Label>
              <Input type="text" name="projects"  required onChange={this.handleChange} />
            </FormGroup>
          </Col>
        </Row>
       
        <Button type="submit"  color="primary">Make my resume !</Button>
      </Form>
         </div>
       <Blue />
        
         </div>
          
            </React.Fragment>);
    }
}
 
export default Template1;