import React from "react";
import axios from 'axios'

export default class CriarPlaylists extends React.Component{
    state = {
        nome: ''
    }

    handleNome = (e) =>{
        this.setState({nome: e.target.value})
    }

    createPlaylist = () =>{
        const url =  'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: this.state.nome
        }
        axios.post(url, body,{
            headers:{
                Authorization: 'igor-medeiros-carver'
            }
        })
        .then((res)=>{
            alert('Playlist criada com sucesso')
            this.setState({nome: ''})
        })
        .catch((err)=>{
            alert(err.response.data.message)
            this.setState({nome: ''})
        })
    }
    render(){
        return(
            <div>
                <h2>Criar playlist</h2>
            <input type='text'
           placeholder='Nome da playlist'
           value={this.state.nome}
           onChange={this.handleNome}/>
           <button onClick={this.createPlaylist}>Criar</button>
            </div>
        )
    }
}