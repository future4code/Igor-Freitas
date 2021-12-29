import React from 'react'
import * as C from './styled'
import Logo from '../../assets/logo.png'
import { Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { goToRegister } from '../../routes/coordinator';
import LoginForm from './LoginForm';
import useUnprotectedPage from '../../hooks/useProtectedPage'


export default function Login({setRightButtonText}) {
  useUnprotectedPage()
  const history = useHistory()

  return (
    <C.Container>
      <C.Logo src={Logo} />
      <LoginForm setRightButtonText={setRightButtonText}/>
      <C.SignUpButtonContainer>
        <Button
        onClick={()=> goToRegister(history)}
        type={'submit'}
        variant={'text'}
        color='primary'
        fullWidth
        >
          Cadastre-se
        </Button>
      </C.SignUpButtonContainer>
    </C.Container>
  )
}

