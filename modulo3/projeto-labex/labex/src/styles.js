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
    text-shadow: 2px 2px 0px rgba(184, 136, 70, 1);
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

 // ADM LOGIN

 export const DivLogin = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 p{
   font-size: 24px;
   font-weight: 500;
 }
 `
 export const ButtonLogin = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 `

//  PAGE LIST TRIPS

export const DivTrips = styled.div`
border: 25px solid #B88846;
border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23B88846' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23B88846'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E") 25;
padding: 30px;
margin-top: 30px;
&:hover{
  border: 35px solid #B88846;
  border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23B88846' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23B88846'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E") 25;

}
`
export const TripsCard = styled.div`
width: 100vh;
margin-left: 25vw;
text-align: justify;

p{
  font-size: 16px;
  font-weight: 500;
}
b{
color: #1565C0;
}
`

export const ButtonTrips = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
margin-bottom: 30px;
`
export const Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
font-weight: 500;
border-bottom: 2px solid #1565C0;
&:hover{
  border-bottom: 2px solid #B88846;
}
`

// TRIP DETAILS

export const DivDetails = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
p{
  font-size: 24px;
  border-bottom: 2px solid #1565C0;
  &:hover{
    border-bottom: 2px solid #B88846;
  }
}
`
export const CandCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 5px outset #B88846;
margin-top: 30px;
width: 100vh;
margin-left: 25vw;
p{
  font-size: 16px;
}
b{
  color: #1565C0;
  font-size: 16px;
}
&:hover{
  border: 8px outset #1565C0;
}
`

export const ButtonDetails = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 15px;
`

export const DivAproved = styled.div`
display: flex;
align-items: center;
justify-content: center;
`