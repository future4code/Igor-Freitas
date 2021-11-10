import React from 'react'
import styled from 'styled-components'
import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Final from './Components/Final';

const Button = styled.button`
    display: flex;
    -webkit-text-decoration: none;
    text-decoration: none;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    border: none;
    background-color: #Fff;
`

export default class App extends React.Component {

  state = {
    etapa: 1
  }
  renderizarEtapa = () =>{
    switch(this.state.etapa){
      case 1:
    return <Etapa1/>
    case 2:
      return <Etapa2/>
    case 3:
      return <Etapa3/>
   case 4:
      return <Final/>
      default: <h1>ERROR 404</h1>
        
    }
  }

  trocarEtapa = () => {
    if(this.state.etapa === 1){
      this.setState({etapa: 2})
    } else if (this.state.etapa === 2){
      this.setState({etapa: 3})
    } else if (this.state.etapa === 3){
      this.setState({etapa:4})
    }
  }
  render(){
    let botao
    if (this.state.etapa === 4){
      botao = ''
    } else if((this.state.etapa <= 3)){
      botao = <button onClick={this.trocarEtapa}>Próxima Etapa</button>
    }
  
    return (
      <div>
        {this.renderizarEtapa()}
        <Button >
          {botao}
        </Button>
      </div>
  
     
    )
  }
}

