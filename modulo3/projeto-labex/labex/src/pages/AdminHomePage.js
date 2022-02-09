import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { URL_BASE } from '../constants/url'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import * as C from '../styles'
import { useState, useEffect } from 'react'
import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2'

export default function AdminHomePage() {
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
    
    const deleteTrip = () => {
        const body = {
            sucess: true
        }
        axios
            .delete(`${URL_BASE}/trips/`, body)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Apagada!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo deu errado!',
                    footer: '<b>Verifique tudo e tente novamente</b>'
                })
                console.log('delete',err.response)
            })
    }



    const tripList = trip.map((tps) => {
        return (
            <C.DivTrips>
                <p onClick={() => history.push(`/detalhes/${tps.id}`)}><b>Nome: </b>{tps.name}</p>
            </C.DivTrips>

        )
    })

   

    const history = useHistory()

    const goToHome = () => {
        history.push('/')
    }
    const goCreateTrips = () =>{
        history.push('/criar')
    }
    axios
        .get(`${URL_BASE}`)

    return (
        <div>
            <C.GlobalStyle/>
            <C.TripsCard key={trip.id}>{tripList}</C.TripsCard>
            <C.ButtonForm>
            <Stack spacing={15} direction="row">
                <Button variant="contained" type='submit' onClick={goToHome}>Voltar</Button>
                <Button variant="contained" type='submit'onClick={goCreateTrips}>Criar Viagem</Button>
                <Button variant="contained" type='submit'>Logout</Button>
            </Stack>
            </C.ButtonForm>
        </div>
    )
}