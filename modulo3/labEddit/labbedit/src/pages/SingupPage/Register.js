import React from 'react'
import { CircularProgress, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import * as C from './styled'
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { register } from '../../services/user';
import { useState } from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import Logo from '../../assets/logo.png'



export default function Register() {
  useProtectedPage()
  const history = useHistory()
  const [form, onChange, clear] = useForm({ username: '', email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (e) => {
    e.preventDefault()
    register(form, clear, history, setIsLoading)
  }
  return (
    <form onSubmit={onSubmitForm}>
    <C.SignUpFormContainer>
      <C.InputsContainer>
        <C.LogoImage src={Logo}/>
        <TextField
          value={form.username}
          onChange={onChange}
          name={'username'}
          label={'Nome'}
          variant={'outlined'}
          margin={'normal'}
          fullWidth
          autoFocus
          required
        />

        <TextField
          value={form.email}
          onChange={onChange}
          name={'email'}
          label={'E-mail'}
          variant={'outlined'}
          margin={'normal'}
          type={'email'}
          fullWidth
          autoFocus
          required
        />
<TextField
          value={form.password}
          onChange={onChange}
          name={'password'}
          label={'Senha'}
          variant={'outlined'}
          margin={'normal'}
          type={'password'}
          fullWidth
          autoFocus
          required
        />
      </C.InputsContainer>
      <Button
      type={'submit'}
      color={'primary'}
      variant={'contained'}
      fullWidth
      >
        {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Cadastro</>}
      </Button>
    </C.SignUpFormContainer>
    </form>
  );
}

