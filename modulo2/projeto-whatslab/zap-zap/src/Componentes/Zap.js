import React from 'react';
import styled from 'styled-components'


const ContainerMsg = styled.div `
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    height: 90vh;
    border: 1px solid #000;
    margin-left: 50vh;
    margin-top: 6vh;
    background-color: #ececec;
` 
const InputNome = styled.input`
    display: flex;
    width: 15%;
    height: 25px;
    margin-top: 85vh;
    border: 2px solid #142d4c;

`
const InputMsg = styled.input`
    display: flex;
    width: 70%;
    height: 25px;
    margin-top: 85vh;
    border: 2px solid #142d4c;;
`
const BotaoEnviar = styled.button`
    display: flex;
    margin-top: 85.5vh; 
   
   

`

export default class Zap extends React.Component{

    state = {
        user: [
            {
                nome:'Igor',
                mensagem:'Teste'
            },
            {
                nome: 'Dani',
                mensagem:'Testee'
            }
        ],
        valorInputNome: "",
        ValorInputMensagem: ""
    }
    enviarMensagem =() =>{
        const novoUser = {
            nome: this.state.valorInputNome,
            mensagem: this.state.ValorInputMensagem
        }

        const novaPessoa = [...this.state.user, novoUser]
        this.setState({user: novaPessoa})
    }
  
    onChangeInputUser = (e)=>{
        this.setState({valorInputUser})
    }
   
    onChangeInputMensagem = (e)=>{
        this.setState({ValorInputMensagem})
    }

 



    render(){
        const listaDeComponentes = this.state.user.map((pessoa)=>{
            return(
                <p>
                    {pessoa.nome} {pessoa.mensagem}
                </p>
            )
        })
        return(
            <ContainerMsg>
               <InputNome placeholder="Nome" value={this.state.valorNome}
               value = {this.state.valorNome}
               onChange={this.onChangeNome}
               />

               <InputMsg placeholder="Mensagem" value={this.state.valorMensagem}
               value = {this.state.valorMensagem}
               onChange={this.onChangeMensagem}
               />
                
                    <BotaoEnviar onClick ={this.enviarMensagem}>Enviar</BotaoEnviar>
                    <div>{listaDeComponentes}</div>

            </ContainerMsg>
        )
    }
}