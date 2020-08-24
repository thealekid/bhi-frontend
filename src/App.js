import React, { Component, Fragment } from 'react';
import Unauthorised from "./components/Unauthorised/Unauthorised";
import Authorised from "./components/Authorised";
import API from './API';
import AdminPage from './components/AdminPage/AdminPage';


class App extends Component {

  state = {
    user: {},
    isLoading: true,
    type: null,
    error: null
  }

  login = (data) => {
    if (data.user){
      this.setState({
        user: data.user, type: "user",
        isLoading: false, error: null
      })
      localStorage.token = data.token
    }
    else
    {this.setState({
      error: data.message
    })}
  }

  logout = () => {
    // debugger
    this.setState({
      user: {}, type: null
    })
    localStorage.removeItem("token")
  }

  adminlogin = (data) => {
    // debugger
    if (data.admin){
      this.setState({
        user: data.admin, type: "admin",
        isLoading: false, error: null
      })
      localStorage.token = data.token
    }
    else
    {this.setState({
      error: data.message
    })}
  }

  componentDidMount(){
    if (localStorage.token){
      API.validate()
      .then(data => { 
        if (data.user){
          this.login(data)
        }
        else if (data.admin){
          this.adminlogin(data)
        }
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
        {this.state.user.id ? this.state.type === "user" ? <Authorised logout={this.logout}/> : <AdminPage logout={this.logout}/>: <Unauthorised login={this.login} adminlogin={this.adminlogin}/>}
        {this.state.error ? <div>{this.state.error}</div> : null}
      </Fragment>
    )

  }
}

export default App;
