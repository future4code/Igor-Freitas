import React from "react";
import styled from 'styled-components'

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default class Final extends React.Component {

   render() {
       return (
           <Cont>
            <h2>O FORMULÁRIO ACABOU</h2>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Cont>
       );
   }
}