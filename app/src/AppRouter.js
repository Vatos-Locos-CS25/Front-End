import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PrivateRoute from "./routes/PrivateRoute"
import Registration from "./pages/registration"
import LogIn from "./pages/login"
import Game from "./pages/game"
const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/registration" component={Registration}/>
                    <Route path="/login" component={LogIn}/>
                    <PrivateRoute path="/game" component={Game}/>
                    
                </Switch>
            </Router>
        </>
    )
}

export default AppRouter
