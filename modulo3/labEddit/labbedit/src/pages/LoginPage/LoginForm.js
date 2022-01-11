import React, {useState} from "react"
import * as C from './styled'
import { Button, TextField } from '@material-ui/core';
import useForm from '../../hooks/useForm';
import {useHistory} from 'react-router-dom'
import { login } from '../../services/user';
import CircularProgress from '@material-ui/core/CircularProgress'

export default function LoginForm({setRightButtonText}) {
  const [form, onChange, clear] = useForm({email: "", password: ""})
  const [isLoading, setIsLoading] = useState(false)

  const history = useHistory()
  
  const onSubmitForm = (e) => {
    e.preventDefault()
    login(form, clear, history, setIsLoading, setRightButtonText)
  }

  
  return (
    <C.Container>
       <form onSubmit={onSubmitForm}>
      <C.InputsContainer>
          <TextField
            value={form.email}
            onChange={onChange}
            type={'email'}
            name={'email'}
            variant={'outlined'}
            label={'E-mail'}
            margin='normal'
            color='primary'
            fullWidth
            required
            
          />

          <TextField
          value={form.password}
          onChange={onChange}
            type={'password'}
            name={'password'}
            variant={'outlined'}
            label={'Senha'}
            margin='normal'
            fullWidth
            required
          />

          <Button 
          type={'submit'}
          variant={'contained'}
          margin={'normal'}
          color={'primary'}
          fullWidth
          >
            {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Login</>}
          </Button>
      </C.InputsContainer>
      </form>
    </C.Container>
  )
}

