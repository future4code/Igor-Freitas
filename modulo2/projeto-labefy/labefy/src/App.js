import React from 'react'
import { GlobalStyle } from './App.styles'
import Playlist from './Components/Tocar/Playlist'
import VerLista from './Components/VerListas/VerListas'
import CriarPlaylists from './Components/CriarPlayList/CriarPlaylist'


export default class App extends React.Component{
  render(){
    return(
      <div>
        <GlobalStyle/>
       <Playlist/>
      </div>
    )
  }
}