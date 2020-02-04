import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PrivateRoute from "./routes/PrivateRoute"
import Registration from "./pages/registration"
import LogIn from "./pages/login"
import Game from "./pages/game"
import Home from "./pages/Home"

const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>
    
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/registration" component={Registration}/>
                    <Route exact path="/login" component={LogIn}/>
                    <PrivateRoute exact path="/game" component={Game}/>
                    {/* Remove me when done, please */}
                    <Route exact path="/game-dev" component={Game}/>
                    {/* ^^^ */}

                </Switch>
            </Router>
        </>
    )
}

export default AppRouter
