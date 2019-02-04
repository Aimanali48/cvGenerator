import React, {Component} from 'react';
import Template1 from './components/template1';
//import Download1 from './components/download1';
//import { Route, BrowserRouter as Router } from 'react-router-dom'


class App extends Component {
render(){
  return(
    <div>
      <Template1 history={this.props.history}/>
    </div>
  )
}
 
}
 
export default App;


