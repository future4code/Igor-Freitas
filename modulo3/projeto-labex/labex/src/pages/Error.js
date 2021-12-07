import Erro from '../img/error.gif'
import * as C from '../styles'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function Error() {
    return (

        <div>
            <C.GlobalStyle/>
            <C.DivError>
                <img src={Erro} />
                <C.ButtonHome>
                <Stack spacing={15} direction="row">
                    <Button variant="contained" type='submit' >Inicio</Button>
                </Stack>
                </C.ButtonHome>
            </C.DivError>
        </div>
    )
}