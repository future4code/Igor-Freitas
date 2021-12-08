import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'


export default function ListTripsPage (){
    const history = useHistory()

    const goToHome = () =>{
        history.push('/')
    }
    return(
        <div>
    <Stack spacing={15} direction="row">
    <Button variant="contained" type='submit' onClick={goToHome}>Voltar</Button>
    <Button variant="contained" type='submit'>Inscrever-se</Button>
    </Stack>
        </div>
    )
}