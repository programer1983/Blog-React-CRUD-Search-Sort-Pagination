import React from 'react'
import PostItem from '../PostItem/PostItem'
import "./PostList.css"

const PostList = ({posts, title, remove}) => {
  return (
    <div className="post__list">
         <h1>{title}</h1>
            {posts.map((post, index) => {
               return <PostItem remove={remove} number={index + 1} key={post.id}  post={post} />
        })}
    </div>
  )
}

export default PostList