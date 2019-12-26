import React from 'react';
import Cronometro from '../img/cronometro.png'
import '../App.css'


class Singup extends React.Component {

    render(){
        return(
            <div className='container-singup'>
                <section className='singup-apresentation'>
                    <figure className='aprasentation-box_img'>
                        <img className='box_img-img_cronometro' src={Cronometro}></img>
                    </figure>
                </section>
                <section className='singup-registration_space'>
                    <div className='registration_space-box_creteAccount'>
                        <h2 className='box_createAccount-Title'>Criar Conta</h2>
                        <form className='box_createAccount-box_infoRegistration'>
                            <label>nome completo</label>
                            <input placeholder='insira seu nome completo' type='text' required></input>
                            <label>apelido</label>
                            <input placeholder='insira seu apelido' type='text' required></input>
                            <label>senha</label>
                            <input placeholder='insira sua senha' type='password' required></input>  
                            <label>e-mail</label>
                            <input placeholder='insira seu email' type='email' required></input>   
                            <button className='box_infoReegistration-buttonSend'>Criar</button>
                        </form>
                        <p className='box_createAccount-backOption'>Já tem uma conta? <a href='#'>Conecte-se</a></p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Singup;