import React from 'react'
import PostItem from '../PostItem/PostItem'
import "./PostList.css"

const PostList = ({posts, title}) => {
  return (
    <div className="post__list">
         <h1>{title}</h1>
            {posts.map((post) => {
               return <PostItem key={post.id}  post={post} />
        })}
    </div>
  )
}

export default PostList