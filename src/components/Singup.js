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
                        <form onSubmit={this.props.functionSaveUser} className='box_createAccount-box_infoRegistration'>
                            <label className='box_infoRegistration-subtutle first'>nome completo</label>
                            <input id='inpNome' className='box_infoRegistration-textArea' placeholder='insira seu nome completo' type='text' required></input>
                            <label className='box_infoRegistration-subtutle'>apelido</label>
                            <input id='inpApelido' className='box_infoRegistration-textArea' placeholder='insira seu apelido' type='text' required></input>
                            <label className='box_infoRegistration-subtutle'>senha</label>
                            <input id='password1' className='box_infoRegistration-textArea' onChange={this.props.typeInput} placeholder='insira sua senha' type='password' required></input>
                            <label className='box_infoRegistration-subtutle'>confirme senha</label>
                            <input id='password2' className='box_infoRegistration-textArea' onChange={this.props.typeInput} placeholder='insira sua senha' type='password' required></input>  
                            <p className='seePassword' onClick={this.props.mostraSenh}>👁️</p>
                            <label className='box_infoRegistration-subtutle'>e-mail</label>
                            <input id='inpEmail' className='box_infoRegistration-textArea' placeholder='insira seu email' type='email' required></input>   
                            <button className='box_infoReegistration-buttonSend'>Criar</button>
                        </form>
                        <p className='box_createAccount-backOption'>Já tem uma conta? <a onClick={this.props.linkLogin} className='linkSingup' href='#'>Conecte-se</a></p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Singup;