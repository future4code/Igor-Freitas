import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'
import * as C from '../styles'
import axios from 'axios'
import { URL_BASE } from '../constants/url'
import { useState } from 'react'
import Swal from 'sweetalert2'


export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitLogin = (e) => {
        e.preventDefault()
        console.log(email, password)
        const body = {
            email: email,
            password: password
        }
        axios
            .post(`${URL_BASE}/login`, body)
            .then((res) => {
                console.log('Ok', res.data.token)
                localStorage.setItem('token', res.data.token)
                history.push('/admhome')
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo deu errado!',
                    footer: '<b>Confira seu login e senha</b>'
                })
            })
    }




    const history = useHistory()

    const goToHome = () => {
        history.push('/')
    }


    return (
        
        <C.DivForm>
            <C.GlobalStyle />
            <C.Title>
                <p>Login</p>
            </C.Title>

            <C.DivLogin>
                <input required
                    type='email'
                    value={email}
                    placeholder='E-mail'
                    onChange={onChangeEmail}>
                </input>

                <input required
                    type='password'
                    value={password}
                    placeholder='senha'
                    onChange={onChangePassword}
                    pattern={'^{3,}'}
                    title={'minimo de 3 caractere'}
                >
                </input>

            </C.DivLogin>
            
            <C.ButtonForm>
                <Stack spacing={15} direction="row">
                    <Button variant="contained" type='submit' onClick={goToHome}>Voltar</Button>
                    <Button variant="contained" type='submit' onClick={onSubmitLogin}>Entrar</Button>
                </Stack>
            </C.ButtonForm>
        </C.DivForm>
    )
}