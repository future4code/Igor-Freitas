import React from 'react'
import axios from 'axios'
import * as C from './Verlistas.styles'

export default class VerLista extends React.Component{
    state = {
        playlistCriadas:[]
    }

    componentDidMount(){
        this.getAllPlaylists()
    }

    getAllPlaylists = async() =>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        try {
            const res = await axios.get(url,{
                headers:{
                    Authorization: 'igor-medeiros-carver'
                }
            })
            this.setState({playlistsCriadas: res.data})
        } catch(err){
            alert('Erro!')
        }
        }

    render(){
        return(
            <C.Container>
                <h2>Playlist criadas</h2>
            </C.Container>
        )
    }
}