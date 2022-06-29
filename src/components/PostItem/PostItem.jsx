import React from 'react'
import "./PostItem.css"

const PostItem = () => {
  return (
    <div className="post">
    <div className="post__content">
      <strong>1. Javascript</strong>
      <div>
         Javascript - programming language
      </div>
    </div>
    <div className="post__btns">
      <button>Delete</button>
    </div>
  </div>
  )
}

export default PostItem