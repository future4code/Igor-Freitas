import React, { useState } from 'react'
import AdminHomePage from './AdminHomePage'
import * as C from '../styles'
import Logo from '../img/logo.png' 
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ListTripsPage from './ListTripsPage'

export default function HomePage() {
  const [page, setPage] = useState(1)

  const changePage = () =>{
    if(page === 1){
        return Home
    } else if(page === 2){
        return <ListTripsPage/>
    } else if(page === 3){
      return <AdminHomePage/>
    }
  }
  const onClickAdm = () =>{
       setPage(3)
  }
  const onClickViagens = () =>{
      setPage(2)
  }
  
    

    const Home =   <div>
    <C.GlobalStyle/>
    <C.Home>
    <img src={Logo}/>
    <p>LabeX</p>
    </C.Home>
    <C.Button>
    <Stack spacing={15} direction="row">
    <Button variant="contained" type='submit' onClick={onClickViagens}>Viagens</Button>
    <Button variant="contained" type='submit' onClick={onClickAdm} >Área Admin</Button>
    </Stack>
    </C.Button>
</div>
  return(
    <div>
      {changePage()}
    </div>
  )
}
