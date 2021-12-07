import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import ListTripsPage from './pages/ListTripsPage';
import ApplicationFromPage from './pages/ApplicationFormPage'
import Error from './pages/Error'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default function App() {
 
  return (
    <BrowserRouter>
    <Switch>

      <Route exact path={'/'}>
      <HomePage/>
      </Route>

      <Route exact path={'/viagens'}>
      <ListTripsPage/>
      </Route>

      <Route exact path={'inscricao'}>
      <ApplicationFromPage/>
      </Route>

    <Route>
      <Error/>
    </Route>
    
      </Switch>
    </BrowserRouter>

  );
}
