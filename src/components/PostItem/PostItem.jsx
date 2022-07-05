import React from 'react'
import MyButton from '../../Ui/Button/MyButton'
import "./PostItem.css"
import {useNavigate } from "react-router-dom"

const PostItem = ({post, number, remove}) => {
  const router = useNavigate()
  
  return (
    <div className="post">
    <div className="post__content">
      <strong>{post.id}. {post.title}</strong>
      <div>
         {post.body} 
      </div>
    </div>
    <div className="post__btns">
      <MyButton onClick={() => router(`/posts/${post.id}`)}>Open</MyButton>
      <MyButton onClick={() => remove(post.id)}>Delete</MyButton>
    </div>
  </div>
  )
}

export default PostItem