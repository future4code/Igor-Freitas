import styled from 'styled-components'

export const PostListContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  border-radius: 5px;
  margin-bottom: 15px;
  margin-top: 15px;
  word-break: break-all;
  
  h3{
margin-right: 35vw;
color: #FF914D;
font-size: 24px;
}
b{
  cursor: pointer;
}
img{
  margin-right: 15px;
}
`
export const DivPost = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
cursor: pointer;
Button{
  margin-top: 15px;
}
`

export const VoteContent = styled.div`
display: flex;
align-items: center;
margin-right: 40vw;
font-size: 20px;
color: #545454;
`
export const Comments = styled.div`
text-align: center;
font-size: 16px;
width: 100%;
color: #545454;
cursor: pointer;


`
export const Date = styled.div`
font-size: 16px;
width: 100%;
text-align: right;
color: #FF914D;
`
export const Posts = styled.div`
color: #545454;
text-align: center;
b{
  font-size: 20px;
}
li{
  list-style-image: url('https://img.icons8.com/emoji/12/000000/small-orange-diamond-emoji.png')
}
`
export const ButtonPost = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
color: #545454;
margin-top: 2vh;
cursor: pointer;
div{
  justify-content: flex-end;
  color: #545454;
  font-size: 35px;
}

`
export const Text = styled.div`
display: flex;
margin-left: 50vh;
`
export const Load = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 15vw;
`