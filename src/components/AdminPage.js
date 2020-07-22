import React, { Component } from 'react'
import API from '../API'
import UserCard from './UserCard'

export default class AdminPage extends Component {

    state = {
        users: []
    }

    componentDidMount(){
        API.adminapproved()
        .then(users => this.setState({
            users
        }))
    }

    approvedUser = (user) => {
        API.adminconfirmed(user)
        .then(data => data.approved && this.setState({users: this.state.users.filter((filteredUser) => filteredUser.id === user.id)}))
    }



    render() {
        let usersAwaitingApproval = this.state.users.map(user => <UserCard key={user.id} user={user} approved={this.approvedUser}/>)
        return (
            <div>
                ADMIN PAGE
                {usersAwaitingApproval}
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }
}
