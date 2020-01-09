import React from 'react';

class List extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      segundos: 0,
      minutos: 0,
      control: null,
    };
  };

  startTimer = (index) => {
    console.log(index);
    this.state.control = setInterval(this.cronometro,1000);
  };

  cronometro = () => {
    console.log('pomodoro ligado');
    this.setState({
      segundos: this.state.segundos+1
    });
    if (this.state.segundos >= 60){
      this.setState({
        segundos: 0
      });
    };
    if (this.state.segundos == 0) {
      this.setState({
        minutos:this.state.minutos+1
      });
    };
  };

  stopTimer = () => {
    this.setState({
      isOn: false
    });
    clearInterval(this.state.control)
  };

  deleteList = () => {
    this.props.items.splice(1, 1)
    // console.log(event.target.style.display);
    console.log(this.props.items);
  };

  render(){
    
    return(
      <ul className="box-ul">
        {this.props.items.map((item, index) => 
          <li className="containerCronometro-itemlist" key={index}>
            {item} 
            <input type="checkbox"></input>
            <p>timer: {this.state.minutos}:{this.state.segundos}</p>
            <div className="boxButtons">
              <button className="button" onClick={() => this.startTimer(index)}>start</button>
              <button className="button"  onClick={this.stopTimer}>stop</button> 
              <button className="button"  onClick={(e) => this.deleteList(e)}>X</button>
            </div> 
          </li>
        )}
      </ul>
    );
  };
};


export default List;