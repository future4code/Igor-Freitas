import styled from 'styled-components'

export const MainContent = styled.div`
    background-color: ${(props) => props.color};
    height: 100vh;
    min-height: 600px;
    @media only screen and  (min-width: 600px){
        display: flex;
        min-height: 100vh;
    }

`
export const MenuContent = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: space-evenly;
   color: #FFFF;
   
    select{
        width: 150px;
        height: 30px;
        border: none;
        border-radius: 10px;
        font-size: 15px;
        font-weight: bolder;
        text-align: center;
    }

    @media only screen and (min-width: 600px){
        width: 60%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

`

export const NumbersContent = styled.div`
    width: 100%;
    height: 60vh;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #EFEFEF;
    text-align: center;

    div{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    p{
        text-align: center;
        align-items: center;
        margin-top: 35px;
        font-size: 13px;
    }
    @media only screen and (min-width: 600px) {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 0px;
        padding-bottom: 0;
    
        p{
            width: 90%;
        }
    }

`

export const Division = styled.div`
    width: 100%;
    height: 25px;
    max-height: 65px;
    position: relative;
        path{
            fill: #EFEFEF
        }
        @media only screen and (min-width: 600px){
            width: 0px;
        }
`

export const NumberBall = styled.div`
    width: 76px;
    height: 76px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;   
    border: none;
    border-radius: 50%;
    margin: 5px;
    background-color: #FFFF;
    
    @media only screen and (max-widt: 430px) {
        width: 50px;
        height: 50px;
        margin: 2px;
        display: flex;
    }

`