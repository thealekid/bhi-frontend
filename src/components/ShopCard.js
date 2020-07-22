import React, { Component } from 'react'
import API from '../API'
import ShopCardInfo from './ShopCardInfo'
import ShopComment from './ShopComment'
import ShopCommentCard from './ShopCommentCard'


export default class ShopCard extends Component {

    state = {
        shop: {},
        comments: []
    }


    componentDidMount(){
        API.getShop(this.props.shopId)
        .then(data => this.setState({
            shop: data.shop,
            comments: data.comments
        }))

    }

    addComment = (comment) => {
        this.setState({
            comments: [comment, ...this.state.comments]
        })
    }
    render () {
        const allComments = this.state.comments.map(comment => <ShopCommentCard key={comment.id} comment={comment} /> )
        return (
            <div>
                <ShopCardInfo labelInput="Name:" pInput={this.state.shop.name}/>
                <ShopCardInfo labelInput="Image:" img src={this.state.shop.image_url} alt=""/>
                <ShopCardInfo labelInput="Service:" pInput={this.state.shop.service}/>
                <ShopCardInfo labelInput="Phone no:" pInput={this.state.shop.phone_number}/>
                <ShopCardInfo labelInput="Opening Hours:" pInput={this.state.shop.opening_hours}/>
                <ShopCardInfo labelInput="Address:" pInput={this.state.shop.address}/>
                <ShopCardInfo labelInput="Town:" pInput={this.state.shop.town}/>
                <ShopCardInfo labelInput="County:" pInput={this.state.shop.county}/>
                <ShopCardInfo labelInput="Country:" pInput={this.state.shop.country}/>
                <ShopCardInfo labelInput="Postcode:" pInput={this.state.shop.postcode}/>
                <ShopComment shopId={this.props.shopId} addComment={this.addComment}/>
                {allComments}
            </div>
        )
    }
}

