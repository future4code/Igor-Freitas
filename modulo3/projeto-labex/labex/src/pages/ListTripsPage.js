import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { URL_BASE } from '../constants/url'
import { useState, useEffect } from 'react'
import * as C from '../styles'



export default function ListTripsPage() {
    const [trip, setTrip] = useState([])

    const history = useHistory()

    const goToHome = () => {
        history.push('/')
    }

    const goToSubs = () =>{
        history.push('/inscricao')
    }


    const getTrips = () => {
        axios
            .get(`${URL_BASE}/trips`)
            .then((res) => {
                console.log(res.data)
                setTrip(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getTrips()
    }, [])

    const tripList = trip.map((tps) => {
        return (
           <C.DivTrips>
                <p><b>Nome: </b>{tps.name}</p>
                <p><b>Descrição: </b>{tps.description}</p>
                <p><b>Duração: </b>{tps.durationInDays}</p>
                <p><b>Data: </b>{tps.date}</p>
                <p><b>Planeta: </b>{tps.planet}</p>
           </C.DivTrips>

        )
    })

    return (
        <div>
            <C.GlobalStyle/>
            <C.Title><p>Lista de Viagens</p></C.Title>
            <C.TripsCard key={trip.id}>{tripList}</C.TripsCard>
            <C.ButtonTrips>
            <Stack spacing={15} direction="row">
                <Button variant="contained" type='submit' onClick={goToHome}>Voltar</Button>
                <Button variant="contained" type='submit'onClick={goToSubs}>Inscrever-se</Button>
            </Stack>
            </C.ButtonTrips>
            
        </div>
    )
}