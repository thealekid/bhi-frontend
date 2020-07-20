import React, { Component, Fragment } from 'react';
import Unauthorised from "./components/Unauthorised";
import Authorised from "./components/Authorised";
import API from './API';



class App extends Component {

  state = {
    user: {},
    isLoading: true
  }

  login = (data) => {
    this.setState({
      user: data.user, 
      isLoading: false
    })
    localStorage.token = data.token
  }

  logout = () => {
    this.setState({
      user: {}
    })
    localStorage.removeItem("token")
  }

  componentDidMount(){
    if (localStorage.token){
      API.validate()
      .then(data => {
        this.login(data)
      })
    }
    else {
      this.setState({
        isLoading: false
      })
    }
  }

  render (){
    if (this.state.isLoading){
      return <div></div>
    }
    return (
      <Fragment>
        {this.state.user.id ? <Authorised logout={this.logout}/> : <Unauthorised login={this.login}/>}
      </Fragment>
    )

  }
}

export default App;
