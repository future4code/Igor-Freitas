
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from '../pages/LoginPage/Login'
import Register from '../pages/SingupPage/Register'
import Posts from '../pages/PostPage/Posts'
import Feed from '../pages/FeedPage/Feed'
import Error from '../pages/ErrorPage/Error'



 const Router = ({ setRightButtonText}) =>{
    return(
            <Switch>
                <Route exact path='/login'>
                    <Login  setRightButtonText={setRightButtonText}/>
                </Route>

                <Route exact path='/cadastro'>
                    <Register setRightButtonText={setRightButtonText} />
                </Route>

                <Route exact path='/posts/:id'>
                    <Posts />
                </Route>

                <Route exact path='/'>
                    <Feed />
                </Route>

                <Route>
                    <Error/>
                </Route>
            </Switch>
    )

}
export default Router