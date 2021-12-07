import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #101010;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

// HOME 
export const Home = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 15vh;
img{
width: 300px;
height: 300px;
}
p{
  color: #1565C0;
  font-size: 60px;
  font-weight: 900;
  &:hover{
    text-shadow: 2px 2px 0px rgba(255, 255, 255, 1);
  }
}
`
export const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 40px;
`
// FORM PAGE

export const DivForm = styled.div`
display: flex;
align-items: center;
justify-content: center;
p{
  font-size: 24px;
  font-weight: 500;
}
`



// ERROR PAGE 
 export const DivError = styled.div`
 text-align: center;
 background-color: #152643;
 max-width: 100%;
 height: 100vh;
 overflow-x: hidden;
 

  img{
    width: 100vh;
    
  }
 `

 export const ButtonHome = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 `