import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { URL_BASE } from '../constants/url'
import * as C from '../styles'

export default function TripDetailsPage() {
    const [details, setDetail] = useState({})
    const [candidates, setCandidates] = useState([])


    const history = useHistory()
    const params = useParams()

    const goAdmHome = () => {
        history.push('/admhome')
    };
    useEffect(() => {
        getDetail()
    }, [])

    const getDetail = () => {
        const token = localStorage.getItem('token')
        axios
            .get(`${URL_BASE}/trip/${params.id}`, {
                headers: {
                    auth: token
                }
            })

            .then((res) => {
                setDetail(res.data.trip)
                setCandidates(res.data.trip)
            })
            .catch((err) => {
                console.log('erroo', err.response)
            })
    }


    const tripDetail = <div>
        <C.DivTrips>
            <p><b>Nome: </b>{details.name}</p>
            <p><b>Descrição: </b>{details.description}</p>
            <p><b>Data: </b>{details.date}</p>
            <p><b>Planeta: </b>{details.planet}</p>
            <p><b>Duração: </b>{details.durationInDays}</p>
        </C.DivTrips>
    </div>

    const detailCandidate = details.candidates && details.candidates.map((profile) => {
        return (
            <C.CandCard key={profile.id}>
                <p><b>Nome: </b>{profile.name}</p>
                <p><b>Idade: </b>{profile.age}</p>
                <p><b>Pais: </b>{profile.country}</p>
                <p><b>Profissão: </b>{profile.profession}</p>
                <p><b>Texto de Candidatura: </b>{profile.applicationText}</p>

                <C.ButtonDetails>
                    <Stack spacing={15} direction="row">
                        <Button variant="contained" type='submit' onClick={() => decideCandidate(profile.id, 'aproved')}>Aprovar</Button>
                        <Button variant="contained" type='submit' onClick={() => decideCandidate(profile.id, 'reproved')}>Reprovar</Button>
                    </Stack>
                </C.ButtonDetails>
            </C.CandCard>
        )
    })


    const decideCandidate = (id, res) => {
        if (res === 'aproved') {
            const body = {
                approve: true
            }
            axios
                .put(`${URL_BASE}/trips/${params.id}/candidates/${id}/decide`, body,
                    {
                        headers: {
                            auth: localStorage.getItem('token')
                        }
                    })
                .then((res) => {
                    getDetail()
                    console.log(res.data.approved)
                })
                .catch((err) => {
                    console.log(err.response)
                })

        } else if (res === 'reproved') {
            const body = {
                approve: false
            }
            axios
                .put(`${URL_BASE}/trips/${params.id}/candidates/${id}/decide`, body,
                    {
                        headers: {
                            auth: localStorage.getItem('token')
                        }
                    })
                .then((res) => {
                    getDetail()
                    console.log(res.data.approved)
                })
                .catch((err) => {
                    console.log(err.response)
                })
        }
    }

    const approved = details.approved && details.approved.map((pass) => {
        return <li key={pass.id}>{pass.name}</li>

    })

    


    return (
        <div>
            <C.GlobalStyle />
            <C.Title>
                <p>Painel Administrativo</p>
            </C.Title>

            <C.TripsCard>
                {tripDetail}
            </C.TripsCard>
            <C.Button>
                <Stack spacing={15} direction="row">
                    <Button variant="contained" type='submit' onClick={goAdmHome}>Voltar</Button>
                </Stack>
            </C.Button>
            <C.DivDetails>
                <p>Candidatos Pendentes</p>
            </C.DivDetails>

            <div>
                {detailCandidate}
            </div>

            <C.DivAproved>
                <C.DivDetails>
                    <p>Candidatos Aprovados</p>
                </C.DivDetails>
                <div>{approved}</div>
            </C.DivAproved>
        </div>
    );
}
