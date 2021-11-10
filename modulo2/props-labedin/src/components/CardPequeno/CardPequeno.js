import React from 'react';
import styled from 'styled-components'

const CardPequenoContainer = styled.div`

display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 770px;

`

const Img = styled.img `
    width: 25px;
    margin-right: 10px;

`

function Logo(props){
    return (
        <Img src={props.url} alt/>
    )
}

function EMail(props){
    return <p> {props.email}</p>;
}

function LogoE(props){
    return (
        <Img src= {props.url}/>
    )
}

function Endereco(props){
    return <p> {props.endereco}</p>;
}


function CardPequeno() {
    return (
      <div>
    <CardPequenoContainer>
        <Logo url = "https://img1.gratispng.com/20180421/pde/kisspng-email-computer-icons-maxcuttm-inc-email-vector-5adb312a18bbf2.9982771815243144101013.jpg"/>
        <EMail email='Email: HUEHUEHUE@gmail.com'/>
    </CardPequenoContainer>
    
       <CardPequenoContainer >
       <LogoE url ="https://img1.gratispng.com/20180531/ucv/kisspng-geo-fence-computer-icons-computer-software-black-address-symbols-5b1042e1a7ca37.4259322515277923536873.jpg"/>
       <Endereco endereco = "Endereço: Rua dos Bobos"/>
           </CardPequenoContainer>
        </div>
    )
}



export default CardPequeno;



    