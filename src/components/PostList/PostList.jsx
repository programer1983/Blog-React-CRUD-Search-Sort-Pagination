import React from 'react'
import PostItem from '../PostItem/PostItem'
import "./PostList.css"

const PostList = ({posts, title}) => {
  return (
    <div className="post__list">
         <h1>{title}</h1>
            {posts.map((post, index) => {
               return <PostItem number={index + 1} key={post.id}  post={post} />
        })}
    </div>
  )
}

export default PostList