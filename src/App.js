import React, { Component, Fragment } from 'react';
import Unauthorised from "./components/Unauthorised"
import Authorised from "./components/Authorised"


class App extends Component {

  state = {
    user: {}
  }

  login = (data) => {
    this.setState({
      user: data.user
    })
    localStorage.token = data.token
  }

  logout = () => {
    this.setState({
      user: {}
    })
    localStorage.removeItem("token")
  }

  render (){

    return (
      <Fragment>
      {this.state.user.id ? <Authorised logout={this.logout}/> : <Unauthorised login={this.login}/>}
      </Fragment>
    )

  }
}

export default App;
