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

`
const Select = styled.select`
width: 100%;
text-align: center;
`

const Inputs = styled.input`
width: 100%;
text-align: center;
`

export default class Etapa1 extends React.Component {

    render(){
        return (
        <Container>
            <h2> ETAPA 1 - DADOS GERAIS</h2>
           <ol>
               <Lista>Qual seu nome?</Lista>
               <Inputs />
               <Lista>Qual sua idade?</Lista>
               <Inputs />
               <Lista>Qual seu e-mail?</Lista>
               <Inputs />
               <Lista>Qual sua escolaridade?</Lista>
               <Select>
                   <option>Ensino Médio Completo</option>
                   <option>Ensino Médio Incompleto</option>
                   <option>Ensino Superior Completo</option>
                   <option>Ensino Superior Incompleto</option>
               </Select>
           </ol>
          
        </Container>
        )
    }
}