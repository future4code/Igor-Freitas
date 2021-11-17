import React from 'react'
import axios from 'axios'
import * as C from './app.styles'

export default class App extends React.Component{
 state = {
   page: 1,
   users: [],
   inputValue: '',
   inputValueEmail: ''
 }
 handleInputChange = (e) =>{
   this.setState({inputValue: e.target.value})
 }
 handleInputEmail = (e) =>{
   this.setState({inputValueEmail: e.target.value})
 }

 componentDidMount(){
   this.getAllUsers()


 }

 getAllUsers = () =>{
   axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
   {
     headers:{
       Authorization: 'igor-medeiros-carver'
     }
   }).then((response)=>{
      this.setState({users: response.data})
      console.log(response.data)
   }).catch((error)=>{
    //  console.log(error.response)
   })
 }


 createUser = () =>{
  const body ={
    name: this.state.inputValue,
    email: this.state.inputValueEmail
  }
  axios.post(
    'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',body,
    {
      headers:{
        Authorization: 'igor-medeiros-carver'
      }
    }
  ).then((response)=>{
    this.setState({inputValue: ''})
    this.setState({inputValueEmail: ''})
    alert('Usuário criado')
    console.log(response.data)
    this.getAllUsers()
  }).catch((error)=>{
    console.log(error.response)
  })
 }

 deleteUser = (id) =>{
   axios.delete(
     `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
    {
      headers:{
        Authorization: 'igor-medeiros-carver'
      }
    }
   ).then((response)=>{
     alert('Usuário apagado')
     this.getAllUsers()
   }).catch((error)=>{
     console.log(error.response)
   })
 }
 mudarPagina = () =>{
   if(this.state.page === 1){
     return this.setState({page: 2})
   } else if(this.state.page === 2){
     return this.setState({page: 1})
   }
 }
render(){
  const userList = this.state.users.map((item)=>(
  <li key={item.id}>{item.name}<button onClick={()=> this.deleteUser(item.id)}>Remover</button></li>
  ))

  const pagina1 =  <C.Menu>
  Nome:
<input placeholder='nome'
value={this.state.inputValue}
onChange={this.handleInputChange}
/>
Email:
  <input placeholder='e-mail.'
value={this.state.inputValueEmail}
onChange={this.handleInputEmail}
/>
<button onClick={this.createUser}>Criar</button>
</C.Menu>

const pagina2 = <C.Lista>
 <ul>{userList}</ul>
 </C.Lista>
  return (
    <div className='App'>
    <button onClick={this.mudarPagina}>Ver lista de usuários</button>
    {this.state.page === 1 ? pagina1 : pagina2}
    </div>
  )
}
}
