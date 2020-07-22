import React from 'react'

export default function ShopCommentCard(props) {
    const date = new Date(props.comment.created_at)
    return (
        <div>
            {props.comment.description}
            {/* {props.comment.username} */}
            {date.toGMTString()}
        </div>
    )
}
