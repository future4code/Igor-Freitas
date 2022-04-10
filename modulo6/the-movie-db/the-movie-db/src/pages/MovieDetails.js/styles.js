import styled from 'styled-components';

export const Container = styled.div`
    height: 600px;
    background-color: #2D0C5E;
    display: flex;
    color: #ffff;
    
`

export const Img = styled.img`
    max-width: 383px;
    max-height: 400px;
    margin-left: 5vw;
    margin-top: 5vw;
    border-radius: 5px;
`

export const InfoContent = styled.div`
    margin-left: 30px;
    margin-top: 5vw;
   
    
    h1,h2{
        color: #ffff;
    }
`

export const DetailsContent = styled.div`
    display: flex;
    flex-direction: row;
    text-align: justify;

`

export const AverageContent = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 15px;
    padding: 15px;
    border: 10px solid;
    border-color: #14ff00;
    border-radius: 50%;
    width: 25px;
    margin-top: 15px;
`