import React from 'react';
import Singup from './components/Singup';
import Login from './components/Login';
import Cronometro from './components/Cronometro'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      // email:'cassioprazeres241@gmail.com',
      // senha:'Cassio@123456',
      
      cadastroNome: ['cassio'],
      cadastroApelido: ['Xavier'],
      cadastroSenha: ['Cassio@123456'],
      cadastroEmail: ['cassioprazeres241@gmail.com'],
      
      atrInputPass: 'text',
      errorSing: '',
      errorLogin: '',
      telaRender: <Login  logarFunction={this.efetuandoLogin} linkSingup={this.criarConta}/>,
    };
  };

  efetuandoLogin = (e) => {
    e.preventDefault();
    this.state.cadastroEmail.map((item) => {
      if (document.getElementById('emailID').value === item) {
        this.state.cadastroSenha.map(item => {
          if (document.getElementById('passwordID').value === item){
            this.setState({
              telaRender: <Cronometro/>
            });
            this.setState({
              errorLogin:''
            });
          }
          else {
            this.setState({
              errorLogin:'email ou senha invalidos'
            });
          };
        });
      }
      else {
        this.setState({
          errorLogin:'email ou senha invalidos'
        });
      };
    });
  };

  setErrorState = () =>{
    this.setState({
      errorSing:'sua senha dever ser igual em ambos os campos'
    });
  };

  diferentPassword = (e) => {
    e.preventDefault();
    if (document.getElementById('password1').value != document.getElementById('password2').value){
      document.getElementById('password1').style.borderBottomColor = 'red' ;
      document.getElementById('password2').style.borderBottomColor = 'red';
      this.setErrorState();
    }
    else {
      this.setState({
        errorSing:''
      });
      if((document.getElementById('password1').style.borderBottomColor == 'red') &&
      (document.getElementById('password2').style.borderBottomColor == 'red')){
        document.getElementById('password1').style.borderBottomColor = '#51efc1' ;
        document.getElementById('password2').style.borderBottomColor = '#51efc1' ;
      }
      else{console.log('else')}
      this.state.cadastroNome.push(document.getElementById('inpNome').value);
      this.state.cadastroApelido.push(document.getElementById('inpApelido').value);
      this.state.cadastroSenha.push(document.getElementById('password1').value);
      this.state.cadastroEmail.push(document.getElementById('inpEmail').value);
      // console.log(this.state.cadastroNome);
      this.telaSingup();
    };
  };

  savePassword = (e) => {
    this.setState({
      valueInputPass: e.target.value
    });
  };
  
  seePassword = () => {
    if(document.getElementById('password1').type == 'password'){
      document.getElementById('password1').type = 'text';
      document.getElementById('password2').type = 'text';
    }
    else{
      document.getElementById('password1').type = 'password';
      document.getElementById('password2').type = 'password';
    };
  };

  criarConta = () => {
    this.setState({
      telaRender: <Singup error={this.state.errorSing} mostraSenh={this.seePassword} typeInput={this.savePassword} functionSaveUser={this.diferentPassword} linkLogin={this.telaSingup}/>
    });
  };

  telaSingup = () => {
    this.setState({
      telaRender: <Login error1={this.state.errorLogin} logarFunction={this.efetuandoLogin} linkSingup={this.criarConta}/>
    });
  };

  render(){
    return (
      <main className="App">
          {/* {this.state.telaRender} */}
          <Cronometro/>
          {/* <Login logarFunction={this.efetuandoLogin} linkSingup={this.criarConta}/> */}
          {/* <Singup error={this.state.error} mostraSenh={this.seePassword} typeInput={this.savePassword} functionSaveUser={this.diferentPassword} linkLogin={this.telaSingup}/>  */}
          {/* <p onMouseEnter={this.setErrorState}>erro:{this.state.errorSing}</p> */}
      </main>
    );
  };
};

export default App;
