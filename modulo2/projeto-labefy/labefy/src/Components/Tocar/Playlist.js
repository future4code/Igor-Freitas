import React, { Component } from "react"
import axios from 'axios'
import * as C from './playlist.style'
import Logo from '../IMG/giphy.gif'
import CriarPlaylists from '../CriarPlayList/CriarPlaylist'



export default class Playlist extends React.Component{
    state = {
        playlist:[]
    }

    componentDidMount(){
        this.getAllPlaylists()
    }

    getAllPlaylists = () =>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
       axios.get(url,{
           headers:{
               Authorization: 'igor-medeiros-carver'
           }
       }) .then((res)=>{
           console.log(res)
           this.setState({playlist: res.data.result.list})
       }) .catch((err)=>{
           console.log(err)
           alert('ERRO')
       })
       
        }



    
    render(){
        const playLists = this.state.playlist.map((lista)=>{
            return(
                <C.CardList key={lista.id}>
                    {lista.name}
                </C.CardList>
            )
        })
        return(
            <C.ContainerPai>
            <C.ContainerMenu>
                <C.MenuIcon>
                    <img src={Logo}/>
                </C.MenuIcon>
                <C.MenuOptions>
                    <ul>
                        
                        <li>Inicio </li>
                        <li>
                            <input type='text'
                            placeholder='Buscar playlist'
                        />
                        </li>
                        <li><a href={CriarPlaylists}>Criar playlist</a></li>
                        <li>Suas playlists</li>
                    </ul>
                </C.MenuOptions>
            </C.ContainerMenu>
            {playLists}
            </C.ContainerPai>
            
            
        )
    }
}