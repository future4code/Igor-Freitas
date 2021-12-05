import styled, { keyframes }from 'styled-components'
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #000;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    margin-left: 85vh;
  }
`
export const DivToda = styled.div`
display: flex;
border: 1px solid;
margin-top: 20vh;
flex-direction: column;
width: 55vh;

h3{
        position: absolute;
        top: 580px;
        left: 875px;
        color: white;
        text-shadow: 0px 0px 5px black;
    }
    p{
        position: absolute;
        top: 610px;
        left: 875px;
        color: white;
        text-shadow: 0px 0px 5px black;
        
    }
`

export const Titulo = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-bottom: 1px solid #ff0204;
    color: #AEAAAB;
    button{
      margin-left: 50px;
    }
    div{
      margin-left: 40px;
    }
    
`

export const Card = styled.div`
p{
  width: 39vh;
  text-shadow: black 0.1em 0.1em 0.2em;
}
h3{
  text-shadow: black 0.1em 0.1em 0.2em;
}
img {
 width: 400px;
 height: 400px;
 border-radius: 10px;
 margin-left: 6vh;
 margin-top: 2vh;
 box-shadow: rgba(89, 89, 89, 0.35) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

`

export const Button = styled.div`
display: flex;
align-items: center;
justify-content:space-between;
width: 20vh;
margin-left: 15vh;
margin-top: 2vh;
`


export const Maches = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
width: 40vh;
gap: 3px;
align-items: center;
margin-top: 10px;
padding: 2px;

img{
  border-radius: 50%;
  border: 5px solid #ccc;
  &:hover{
    border: 5px solid red;
  }

}
div{
  font-family: Open-Sans, Helvetica, Sans-Serif;
    color: #000;
    margin-top: 5px;
    font-weight: 800;
}
p{
  border-left: 5px solid red;
}
`

