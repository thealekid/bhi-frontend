import React, { Component } from "react";
import API from "../../API";
import ShopCardInfo from "../ShopCardInfo";
import ShopComment from "../ShopComment";
import ShopCommentCard from "../ShopCommentCard/ShopCommentCard";
import "./ShopCard.css";

export default class ShopCard extends Component {
  state = {
    shop: {},
    comments: [],
  };

  componentDidMount() {
    API.getShop(this.props.shopId).then((data) =>
      this.setState({
        shop: data.shop,
        comments: data.comments,
      })
    );
  }

  addComment = (comment) => {
    this.setState({
      comments: [comment, ...this.state.comments],
    });
  };
  render() {
    const allComments = this.state.comments.map((comment) => (
      <ShopCommentCard key={comment.id} comment={comment} />
    ));
    return (
      <div className="shop-card">
        <div className="details">
          <div className="image-detail">
            <img src={this.state.shop.image_url} alt="" />
          </div>
          <div className="shop-details">
            <b>
              <ShopCardInfo pInput={this.state.shop.name} />
            </b>
            <ShopCardInfo
              labelInput="Service:"
              pInput={this.state.shop.service}
            />
            <ShopCardInfo
              labelInput="Phone no:"
              pInput={this.state.shop.phone_number}
            />
            <ShopCardInfo
              labelInput="Opening Hours:"
              pInput={this.state.shop.opening_hours}
            />
            <ShopCardInfo
              labelInput="Address:"
              pInput={this.state.shop.address}
            />
            <ShopCardInfo labelInput="Town:" pInput={this.state.shop.town} />
            <ShopCardInfo
              labelInput="County:"
              pInput={this.state.shop.county}
            />
            <ShopCardInfo
              labelInput="Country:"
              pInput={this.state.shop.country}
            />
            <ShopCardInfo
              labelInput="Postcode:"
              pInput={this.state.shop.postcode}
            />
          </div>
        </div>
        <div className="reviews">
            <h2>Comments</h2>
          <ShopComment
            shopId={this.props.shopId}
            addComment={this.addComment}
          />
          {allComments}
        </div>
      </div>
    );
  }
}
