import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;

`
const Lista = styled.li`
padding: 15px;
list-style: none;

`

const Botao = styled.button`
display: flex;
margin-top: 15px;
`
const Input  = styled.input`
    display: flex;
`




export default class Etapa2 extends React.Component{
    state = {
        etapa1: false
    }

    render(){

        return(
        <Container>
            <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            <ol>
                <Lista>5. Qual curso?</Lista>
                <Input />
                <Lista>6. Qual a unidade de ensino?</Lista>
                <Input />
            </ol>
        </Container>
        )
    }
}