import * as C from '../styles'
import Logo from '../img/logo.png' 
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'



export default function HomePage() {
    return (
      <div>
          <C.GlobalStyle/>
          <C.Home>
          <img src={Logo}/>
          <p>LabeX</p>
          </C.Home>
          <C.Button>
          {/* <button>Viagens</button>
          <div>
          <button>Área Admin</button>
          </div> */}
          </C.Button>

      </div>
    );
  }
  