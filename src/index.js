import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Envelope from './Envelope';
import ErrorBox from './ErrorBox';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fromPerson:{
        fullName:"Mr.Sender",
        address:"123 Fake St.Boston, MA 02118"
      },
      toPerson:{
        fullName:"Mr.Receiver",
        address:"123 Fake St.San Francisco, CA 94101"
      }
    };
  }
  render(){
    return (
      <div>
        <Envelope fromPerson={this.state.fromPerson} toPerson={this.state.toPerson}/>
        <ErrorBox >The world is ending</ErrorBox>
      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

