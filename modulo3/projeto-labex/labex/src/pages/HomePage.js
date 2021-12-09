
import * as C from '../styles'
import Logo from '../img/logo.png' 
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'


export default function HomePage() {
  const history = useHistory()

  const goToTrips = () =>{
    history.push('/viagens')
  }
  const goToAdm = () =>{
    history.push('/adm')
}
  return(
    <div>
    <C.GlobalStyle/>
    <C.Home>
    <img src={Logo}/>
    <p>LabeX</p>
    </C.Home>
    <C.Button>
    <Stack spacing={15} direction="row">
    <Button variant="contained" type='submit' onClick={goToTrips}>Viagens</Button>
    <Button variant="contained" type='submit' onClick={goToAdm} >Área Admin</Button>
    </Stack>
    </C.Button>
</div>
  )
}
