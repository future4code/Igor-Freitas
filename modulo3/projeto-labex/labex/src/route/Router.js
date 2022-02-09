
import HomePage from '../pages/HomePage';
import ListTripsPage from '../pages/ListTripsPage';
import ApplicationFromPage from '../pages/ApplicationFormPage';
import Error from '../pages/Error';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import TripDetailsPage from '../pages/TripDetailsPage';
import AdminHomePage from '../pages/AdminHomePage'
import CreateTripPage from '../pages/CreateTripPage';


export const Router = () =>{
 
  return (
    <BrowserRouter>
    <Switch>

      <Route exact path={'/'}>
      <HomePage/>
      </Route>

      <Route exact path={'/viagens'}>
      <ListTripsPage/>
      </Route>

      <Route exact path={'/inscricao'}>
      <ApplicationFromPage/>
      </Route>

      <Route exact path={'/adm'}>
      <LoginPage/>
      </Route>

      <Route exact path={'/admhome'}>
      <AdminHomePage/>
      </Route>

      <Route exact path={'/detalhes/:id'}>
      <TripDetailsPage/>
      </Route>

      <Route exact path={'/criar'}>
      <CreateTripPage/>
      </Route>



    <Route>
      <Error/>
    </Route>
    
      </Switch>
    </BrowserRouter>

  );
}
 