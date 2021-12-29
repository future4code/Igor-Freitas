import axios from 'axios'
import  BASE_URL from '../constants/urls'
import { goToFeed } from '../routes/coordinator'
import Swal from 'sweetalert2'



export const login = (body, clear, history, setIsLoading, setRightButtonText) => {
    setIsLoading(true)
    axios
        .post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            setRightButtonText('Logout')
            goToFeed(history)
        })
        .catch((err) => {
            setIsLoading(false)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Verifique seu e-mail e senha'
              })
        })
}

export const register = (body, clear, history, setIsLoading,setRightButtonText) => {
    setIsLoading(true)
    axios
        .post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            setRightButtonText('Logout')
            goToFeed(history)

        })
        .catch((err) => {
            setIsLoading(false)
            alert(err)
        })
}