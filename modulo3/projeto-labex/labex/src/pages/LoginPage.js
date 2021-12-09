import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'
import * as C from '../styles'
import axios from 'axios'
import { URL_BASE } from '../constants/url'
import { useState } from 'react'

export default function LoginPage(){
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    const onSubmitLogin = () =>{
        console.log(email, password)
        const body = {
            email: email,
            password: password
        }
        axios
        .post(`${URL_BASE}/login`, body)
        .then((res)=>{
            console.log('Ok', res.data.token)
            localStorage.setItem('token' ,res.data.token)
            history.push('/admhome')
        })
        .catch((err)=>{
            console.log('Erro:',err.response)
        })

    }


    const history = useHistory()

    const goToHome = () =>{
        history.push('/')
    }


    return(
        <div>
    <C.GlobalStyle/>
    <C.DivLogin>
    <p>Login</p>

    <b>Login</b>
    <input type='email' value={email} onChange={onChangeEmail}></input>
    <b>Senha</b>
    <input type='password' value={password} onChange={onChangePassword}></input>
    </C.DivLogin>
    <C.ButtonLogin>
    <Stack spacing={15} direction="row">
    <Button variant="contained" type='submit' onClick={goToHome}>Voltar</Button>
    <Button variant="contained" type='submit' onClick={onSubmitLogin}>Entrar</Button>
    </Stack>
    </C.ButtonLogin>
        </div>
    )
}