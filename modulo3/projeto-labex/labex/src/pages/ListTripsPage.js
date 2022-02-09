import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'
import { useGetList } from '../hooks/Hooks'
import { URL_BASE } from '../constants/url'
import axios from 'axios'
import * as C from '../styles'
import Swal from 'sweetalert2'



export default function ListTripsPage() {

    const history = useHistory()

    const goToHome = () => {
        history.push('/')
    }

    const goToSubs = () => {
        history.push('/inscricao')
    }



    const tripList = useGetList().map((trip) => {
        return (
            <C.DivTrips>
                <p><b>Nome: </b>{trip.name}</p>
                <p><b>Descrição: </b>{trip.description}</p>
                <p><b>Duração: </b>{trip.durationInDays}</p>
                <p><b>Data: </b>{trip.date}</p>
                <p><b>Planeta: </b>{trip.planet}</p>
            </C.DivTrips>
        )
    })


    return (
        <div>
            <C.GlobalStyle />
            <C.Title>
                <p>Lista de Viagens</p>
            </C.Title>

            <C.TripsCard>
                {tripList}
            </C.TripsCard>
            <C.ButtonTrips>
                <Stack spacing={15} direction="row">
                    <Button variant="contained" type='submit' onClick={goToHome}>Voltar</Button>
                    <Button variant="contained" type='submit' onClick={goToSubs}>Inscrever-se</Button>
                </Stack>
            </C.ButtonTrips>

        </div>
    )
}