import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {

    usuarios: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/id/870/536/354?grayscale&blur=2',
        fotoPost: 'https://picsum.photos/id/1084/536/354?grayscale'
      },
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/536/354',
        fotoPost: 'https://picsum.photos/id/237/536/354'
      },
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/id/237/536/354',
        fotoPost: 'https://picsum.photos/536/354'
      }
    ],
    valorInputNome: "",
    valorInputFotoPerfil: "",
    valorInputFotoPost: ""

  };

  adicionarPost = () =>{
    const novoPost = {
     nomeUsuario: this.state.valorInputNome,
     fotoUsuario: this.state.valorInputFotoPerfil,
     fotoPost: this.state.valorInputFotoPost
    }
    const novaPostagem =[... this.state.usuarios, novoPost];
    this.setState({usuarios: novaPostagem});
  }

  onChangeInputNome =(e) =>{
    this.setState({valorInputNome: e.target.value})

  }

  onChangeInputFotoPerfil =(e) =>{
    this.setState({valorInputFotoPerfil: e.target.value})

  }

  onChangeInputFotoPost =(e) =>{
    this.setState({valorInputFotoPost: e.target.value})

  }

render() {
  let listaDePost = this.state.usuarios.map((user) => {
    return <Post
      nomeUsuario={user.nomeUsuario}
      fotoUsuario={user.fotoUsuario}
      fotoPost={user.fotoPost}
    />
  })

  return (
  
    <MainContainer>
      <input value={this.state.valorInputFotoPerfil} 
      placeholder = "Foto de perfil"
      onChange ={this.onChangeInputFotoPerfil}
      />

       <input value={this.state.valorInputNome} 
      placeholder = "Digite seu nome"
      onChange ={this.onChangeInputNome}
      />
          <input value={this.state.valorInputFotoPost} 
      placeholder = "Foto do Post"
      onChange ={this.onChangeInputFotoPost}
      />
    <button onClick={this.adicionarPost}> Postar </button>
    {}
      {listaDePost}
    </MainContainer>
   
  )
  

}
}

export default App;
