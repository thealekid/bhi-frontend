import React, { Component, Fragment } from 'react';
import Unauthorised from "./components/Unauthorised";
import Authorised from "./components/Authorised";
import API from './API';
import AdminPage from './components/AdminPage';



class App extends Component {

  state = {
    user: {},
    isLoading: true,
    type: null
  }

  login = (data) => {
    this.setState({
      user: data.user, type: "user",
      isLoading: false
    })
    localStorage.token = data.token
  }

  logout = () => {
    // debugger
    this.setState({
      user: {}
    })
    localStorage.removeItem("token")
  }

  adminlogin = (data) => {
    // debugger
    this.setState({
      user: data.admin, type: "admin",
      isLoading: false
    })
    localStorage.token = data.token
  }

  adminlogout = () => {
    this.setState({
      user: {}
    })
    localStorage.removeItem("token")
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
        {this.state.user.id ? this.state.type === "user" ? <Authorised logout={this.logout}/> : <AdminPage/>: <Unauthorised login={this.login} adminlogin={this.adminlogin}/>}
      </Fragment>
    )

  }
}

export default App;
