import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import {useHistory} from 'react-router-dom'
import {goToLogin} from '../routes/coordinator'
import { useState } from 'react'
import * as C from './styled'
import { Logout } from '@mui/icons-material'

export default function Header({rightButtonText ,setRightButtonText}) {
  const token = localStorage.getItem('token')
  const history = useHistory()
  

  const logout = ()=>{
  localStorage.removeItem('token')
  }  
  
  const rightButtonAction = () => {
    if (token){
        logout()
        setRightButtonText("Login")
        goToLogin(history)
    } else {
        goToLogin(history)
    }
}
  return (
      <AppBar position="static" >
        <C.StyledToolbar >
          <Button color='inherit'>LabEddit</Button>
          <Button color="inherit" conClick={rightButtonAction}>{rightButtonText}</Button>
        </C.StyledToolbar>
      </AppBar>
    
  
  );
}