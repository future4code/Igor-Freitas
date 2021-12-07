
import * as C from '../styles'
import Logo from '../img/logo.png' 
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function HomePage() {
  
  return(
    <div>
    <C.GlobalStyle/>
    <C.Home>
    <img src={Logo}/>
    <p>LabeX</p>
    </C.Home>
    <C.Button>
    <Stack spacing={15} direction="row">
    <Button variant="contained" type='submit' >Viagens</Button>
    <Button variant="contained" type='submit' >Área Admin</Button>
    </Stack>
    </C.Button>
</div>
  )
}
