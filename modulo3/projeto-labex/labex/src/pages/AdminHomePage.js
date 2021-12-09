import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { URL_BASE } from '../constants/url'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import * as C from '../styles'
import { useState, useEffect } from 'react'

export default function AdminHomePage(){
    const [trip, setTrip] = useState([])


    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios
            .get(`${URL_BASE}/trips`)
            .then((res) => {
                console.log(res.data.trips)
                setTrip(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const tripList = trip.map((tps) => {
        return (
            <C.DivTrips>
                <p onClick={()=> history.push(`/detalhes/${tps.id}`)}><b>Nome:</b>{tps.name}</p>
            </C.DivTrips>

        )
    })
    
    const history = useHistory()

    const goToHome = () =>{
        history.push('/')
    }
    axios
    .get(`${URL_BASE}`)

    return(
        <div>
            <C.TripsCard key={trip.id}>{tripList}</C.TripsCard>
     <Stack spacing={15} direction="row">
                <Button variant="contained" type='submit' onClick={goToHome}>Voltar</Button>
                <Button variant="contained" type='submit'>Criar Viagem</Button>
                <Button variant="contained" type='submit'>Logout</Button>
            </Stack>
        </div>
    )
}