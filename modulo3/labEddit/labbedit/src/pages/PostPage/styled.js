import styled from "styled-components";

export const DivContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50vw;
margin: auto;
word-break: break-all;
font-size: 20px;
b{
    color: #FF914D;
    
}

`
export const Post = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #545454;
text-align: center;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

border-radius: 15px;
margin: auto;
margin-top: 30px;
margin-bottom: 50px;
width: 40vw;

h3{
    color: #FF914D;
}
p{
    font-size: 20px;
}
b{
    font-size: 22px;
}

`
export const Comments = styled.div`
display: flex;
flex-direction: row;
margin-left: 3vw;

`
export const Vote = styled.div`
display: flex;
align-items: center;
color: #545454;
padding: 30px;
width: 40vw;
margin: auto;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
border-radius: 15px;
`
export const Title = styled.div`
text-align: center;
border-bottom: 1px solid #FF914D;
width: 10vw;
margin-left: 30vw;
color: #545454;


&:hover{
color: #545454;
border-bottom: 5px solid #FF914D;
}

`
export const Form = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
export const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
`

export const FormComment = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 30px;
`

export const Load = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 15vw;
`