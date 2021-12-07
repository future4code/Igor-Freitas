import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import * as C from '../styles'



export default function ApplicationFormPage (){
    return(
        <div>
        <C.GlobalStyle/>
        <C.DivForm>
        <p>Insreva-se para uma viagem</p>
    </C.DivForm>
    <Stack spacing={15} direction="row">
    <Button variant="contained" type='submit'>Voltar</Button>
    <Button variant="contained" type='submit'>Enviar</Button>
    </Stack>
    </div>
    )
}