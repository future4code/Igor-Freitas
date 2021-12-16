
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from '../pages/LoginPage/Login'
import Register from '../pages/SingupPage/Register'
import Posts from '../pages/PostPage/Posts'
import Feed from '../pages/FeedPage/Feed'
import Error from '../pages/ErrorPage/Error'



 const Router = ({rightButtonText ,setRightButtonText}) =>{
    return(
            <Switch>
                <Route exact path='/'>
                    <Login />
                </Route>

                <Route exact path='/register'>
                    <Register/>
                </Route>

                <Route exact path='/posts'>
                    <Posts />
                </Route>

                <Route exact path='/feed/:id'>
                    <Feed/>
                </Route>

                <Route>
                    <Error/>
                </Route>
            </Switch>
    )

}
export default Router