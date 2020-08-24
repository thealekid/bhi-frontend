import React from "react";

export default function ShopCommentCard(props) {
  const date = new Date(props.comment.created_at);
  return (
    <div className="comment-line">
      <div className="shop-comment-card">
        <div>{props.comment.description}</div>
        <div className="date-time">{date.toGMTString()}</div>
      </div>
      <hr />
    </div >
  );
}
