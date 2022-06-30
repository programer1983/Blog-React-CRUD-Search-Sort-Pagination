import React from 'react'
import "./PostItem.css"

const PostItem = ({post, number}) => {
  return (
    <div className="post">
    <div className="post__content">
      <strong>{number}. {post.title}</strong>
      <div>
         {post.body} 
      </div>
    </div>
    <div className="post__btns">
      <button>Delete</button>
    </div>
  </div>
  )
}

export default PostItem