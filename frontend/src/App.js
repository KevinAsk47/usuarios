import React from 'react'
import './App.css'
import Bienvenida from './Bienvenida'
import Header from './Header'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Logueados from './Logueados'
import Admins from './Admins'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { connect } from 'react-redux'
import authActions from './authActions'

class App extends React.Component {
  render() {
    if (!this.props.userLogged && localStorage.getItem('userLogged')) {
      this.props.loginForzadoPorLS(JSON.parse(localStorage.getItem('userLogged')))
    }

    return (
     <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Bienvenida} />
          {this.props.userLogged && <Route path="/logueados" component={Logueados} />}
          {(this.props.userLogged && this.props.userLogged.admin) && <Route path="/admins" component={Admins} />}
          {!this.props.userLogged && <Route path="/signup" component={SignUp} />}
          {!this.props.userLogged && <Route path="/signin" component={SignIn} />}
          <Redirect to="/" />
        </Switch>
     </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    userLogged: state.userLogged
  }
}

const mapDispatchToProps = {
  loginForzadoPorLS: authActions.loginForzadoPorLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
