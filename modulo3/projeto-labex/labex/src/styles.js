import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #101010;
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
  color: #F2F200;
  font-size: 60px;
  font-weight: 900;
}
`
export const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
button{
margin-left: 45px;
}
`
