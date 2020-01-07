import React from 'react';

class List extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      segundos: 0,
      minutos: 0,
      control: null,
      itemList: true,
      // isOn: false
    }
  }

  startTimer = (index) => {
    console.log(index)
    this.state.control = setInterval(this.cronometro,1000);
  }

  cronometro = () => {
    console.log('pomodoro ligado')
    this.setState({
      segundos: this.state.segundos+1
    })
    if (this.state.segundos >= 60){
      this.setState({
        segundos: 0
      })
    }
    if (this.state.segundos == 0) {
      this.setState({
        minutos:this.state.minutos+1
      })
    }
  }

  stopTimer = () => {
    this.setState({
      isOn: false
    })
    clearInterval(this.state.control)
  }

  deleteList = (index) => {
    // this.props.items.splice(index, 1);

    this.setState({
      segundos: 0,
      minutos: 0,
      itemList: false
    })
  }

  function = () => {
    
  }

  render(){
    return(
      <ul>
        {this.state.itemList && this.props.items.map((item, index) => 
        <li key={index}>
          {item} 
          <input type="checkbox"></input>
          <p>timer: {this.state.minutos}:{this.state.segundos}</p>
          <button onClick={() =>this.startTimer(index)}>start</button>
          <button onClick={this.stopTimer}>stop</button> 
          <button onClick={() =>this.deleteList(index)}>X</button> 
        </li>)}
      </ul>
    )
  }
};


export default List;