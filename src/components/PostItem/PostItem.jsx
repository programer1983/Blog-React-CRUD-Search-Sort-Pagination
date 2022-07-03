import React from 'react'
import MyButton from '../../Ui/Button/MyButton'
import "./PostItem.css"

const PostItem = ({post, number, remove}) => {
  return (
    <div className="post">
    <div className="post__content">
      <strong>{number}. {post.title}</strong>
      <div>
         {post.body} 
      </div>
    </div>
    <div className="post__btns">
      <MyButton onClick={() => remove(post.id)}>Delete</MyButton>
    </div>
  </div>
  )
}

export default PostItem