import React from 'react';
import Singup from './components/Singup';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      
    }
  }

  render(){
    return (
      <div className="App">
          <Singup/>
      </div>
    );
  }
}

export default App;
