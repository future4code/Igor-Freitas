import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import {useHistory} from 'react-router-dom'
import {goToFeed, goToLogin} from '../routes/coordinator'
import { useState } from 'react'
import Logo from '../assets/logo.png'
import * as C from './styled'


export default function Header({rightButtonText, setRightButtonText}) {
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
const leftButtonAction = () =>{
  if(token){
    goToFeed(history)
  } else{
    goToLogin(history)
  }
    
  
}
  return (
      <AppBar position="static" >
        <C.StyledToolbar >
          <Button color='inherit' onClick={leftButtonAction}><img src={Logo}/></Button>
          <Button color="inherit" onClick={rightButtonAction}>{rightButtonText}</Button>
        </C.StyledToolbar>
      </AppBar>
    
  
  );
}