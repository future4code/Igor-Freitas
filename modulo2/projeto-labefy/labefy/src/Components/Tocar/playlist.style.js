import styled from 'styled-components'


export const ContainerPai = styled.div`
display: flex;
flex-flow: row;

`
export const ContainerMenu = styled.div`
background-color: #fff;
width: 15%;
height: 100vh;
border: 1px solid #00B2FF;
`
export const MenuIcon = styled.div`
display: flex;

img{
    width: 100px;
    height: 100px;
    margin: 5px;
}

`
export const MenuOptions = styled.div`
display: flex;
color: #000;
flex-direction: column;
align-items: center;
font-size: 24px;
font-weight: 700;
letter-spacing: normal;
line-height: 16px;
text-transform: none;

ul{
    list-style: none;
    padding: 5px;
}
li{
    padding: 15px;
}


input{
    height: 24px;
    color: #000;
    border: 2px solid #ff0000;
    border-radius: 5px;
}
input::placeholder{
    font-size: 15px;
    color: #000;
}

`
export const CardList = styled.div`
font-size: 24px;
padding: 15px;
margin-top: 30vh;
margin-left: 15px;
border: 2px solid #f00000;
height: 35px;
&:hover{
    border: 3px solid #00B2FF;
    color: #f00000;
    font-size: 30px;
}
`

