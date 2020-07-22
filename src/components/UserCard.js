import React from 'react'

export default function UserCard({user, approved}) {
    return (
        <div>
            <label>First Name:</label>
            <p>{user.first_name}</p>
            <label>Last Name:</label>
            <p>{user.last_name}</p>
            <label>Username:</label>
            <p>{user.username}</p>
            <label>Email Address:</label>
            <p>{user.email_address}</p>
            <button value="Approve" onClick={() => approved(user)}>Approve</button>
            <button value="Decline">Decline</button>
        </div>
    )
}
