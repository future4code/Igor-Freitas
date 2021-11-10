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
text-align: center;

`
const Botao = styled.button`
display: flex;
margin-top: 30px;
`
const Inputs = styled.input`
width: 100%;
text-align: center;
`
const Select = styled.select`
width: 100%;
text-align: center;
`
export default class Etapa extends React.Component {

    render(){
        return (
        <Container>
            <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
           <ol>
              
               <Lista>7. Por que você não terminou um curso de graduação?</Lista>
               <Inputs/>
               <Lista>8. Você fez algum curso complementar?</Lista>
             
               <Select>
                   <option>Nenhum</option>
                   <option>Curso Tecnico</option>
                   <option>Curso de Inglês</option>
               </Select>
           </ol>
          
        </Container>
        )
    }
}