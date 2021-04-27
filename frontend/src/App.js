import React from 'react'
import './App.css'
import Bienvenida from './Bienvenida'
import Header from './Header'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Logueados from './Logueados'
import Admins from './Admins'
import SignUp from './SignUp'
import SignIn from './SignIn'

class App extends React.Component {
  render() {
    return (
     <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Bienvenida} />
          <Route path="/logueados" component={Logueados} />
          <Route path="/admins" component={Admins} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Redirect to="/" />
        </Switch>
     </BrowserRouter>
    )
  }
}

export default App
