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
    width: 50%;
    margin: auto;
    form{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;
        margin-top: 15vh;
  
        input{
            font-size: 16px;
            margin: 10px 0px;
            height: 35px;
            border-radius: 8px;
            border: none;
            text-align: center;
            outline: 0;
            border: 3px solid #1565C0;
            &::placeholder{
              font-weight: 700;
              color: #000;
              opacity: 0.4;
            }
            &:hover{
              border: 3px solid #B88846;
            }
      
        }
        select{
            margin: 10px 0px;
            height: 35px;
            border-radius: 8px;
            border: 3px solid #1565C0;
            background-color: white;
            font-weight: 800;
            text-align:center ;
            &:hover{
              border: 3px solid #B88846;
            }
            
        }
        option{
          font-weight: 500;
          font-size:18px ;
          text-align: center;
          color: #1565C0; 
          &:hover{
              border: 3px solid #1565C0;
            }

        }
      
}
`

export const ButtonForm = styled.div`
display: flex;
justify-content:center;
align-items: center;
margin-top:5vh;
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
margin-top: 15vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center ; 
input{
  width: 560px;
 font-size: 16px;
 margin: 10px 0px;
 height: 35px;
 border-radius: 8px;
 border: none;
 text-align: center;
 outline: 0;
 border: 3px solid #1565C0;
 &::placeholder{
   font-weight: 700;
   color: #000;
   opacity: 0.4;
 }
 &:hover{
   border: 3px solid #B88846;
 }
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

export const Delete = styled.div`
display: flex;
justify-content:flex-end;
&:hover{
  color: red;
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
flex-direction: column;
align-items: center;
justify-content: center;
P{
  font-size: 24px;
}
li{
  list-style:none;
  font-size: 18px;
  color: #B88846;
  font-weight: 500;
  &:before{
    font-size:24px;
  content: '???';
  margin: 0 5px;
  color: #1565C0;
}


`



