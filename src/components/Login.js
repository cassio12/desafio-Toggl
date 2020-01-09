import React from 'react';
import '../App.css';



class Login extends React.Component {
    render(){
        return(
            <div className='container-login'>
                <section className='login-spaceForm'>
                    <form onSubmit={this.props.logarFunction} className='spaceForm-loginArea'>
                        <div className='loginArea-boxEmail'>
                            <label className='boxEmail-subtitle'>email</label>
                            <input id='emailID' className='boxEmail-txtArea' placeholder='email' type='email' required></input>
                        </div>
                        <div className='loginArea-boxEmail'>
                            <label className='boxEmail-subtitle'>senha</label>
                            <input id='passwordID' className='boxEmail-txtArea' placeholder='senha' type='password' required></input>
                        </div>
                        <div className='loginArea-boxLogin_itens'>
                            <input className='boxLogin_itens-checkboxItem' type='checkbox'></input>
                            <label className='boxLogin_itens-legendItem'>manter-me conectado</label>
                            <a onClick={this.props.linkSingup} className='boxLogin_itens-linkItem' href='#'>Criar conta</a>
                        </div>
                        <button className='loginArea-buttonLogin'>logar</button>
                    </form>
                    <p className="erroMensage">{this.props.error1}</p>
                </section>
            </div>
        )
    }
}
export default Login;