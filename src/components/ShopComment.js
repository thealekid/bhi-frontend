import React, { Component } from 'react'
import API from '../API'


export default class ShopComment extends Component {

    state = {
        comment: ""
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        API.postComment({
            description: this.state.comment, shop_id: this.props.shopId
        }).then(this.props.addComment)
        this.setState({
            comment: ""
        })
    }

    render() {

        

        return (
            <div>
                <label>Comments</label>
                <textarea name="comment" value={this.state.comment} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit} >Submit Comment</button>
            </div>
        )
    }
}
