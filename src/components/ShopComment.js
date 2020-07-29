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
            <div className="comment-box">
                <textarea value={this.state.comment} onChange={this.handleChange} placeholder="Please let us know of your experience..."/>
                <button onClick={this.handleSubmit} className="submit-comment" type="submit">Submit Comment</button>
            </div>
        )
    }
}
