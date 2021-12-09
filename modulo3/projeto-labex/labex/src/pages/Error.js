import Erro from '../img/error.gif'
import * as C from '../styles'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'

export default function Error() {
    const history = useHistory()

    const goToHome = () =>{
      history.push('/')
    }

    return (

        <div>
            <C.GlobalStyle/>
            <C.DivError>
                <img src={Erro} />
                <C.ButtonHome>
                <Stack spacing={15} direction="row">
                    <Button variant="contained" type='submit' onClick={goToHome}>Inicio</Button>
                </Stack>
                </C.ButtonHome>
            </C.DivError>
        </div>
    )
}