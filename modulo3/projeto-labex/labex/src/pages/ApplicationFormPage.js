import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import * as C from '../styles'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { URL_BASE } from '../constants/url'
import { WindowSharp } from '@mui/icons-material'



export default function ApplicationFormPage() {
    const history = useHistory()
    const goToTrip = () =>{
        history.push('/viagens')
    }
 
    return (
        <div>
            <C.GlobalStyle />
            <C.DivForm>
                <p>Insreva-se para uma viagem</p>
            </C.DivForm>
            <Stack spacing={15} direction="row">
                <Button variant="contained" type='submit' onClick={goToTrip}>Voltar</Button>
                <Button variant="contained" type='submit'>Enviar</Button>
            </Stack>
        </div>
    )
}