import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PostItem from '../PostItem/PostItem'
import "./PostList.css"

const PostList = ({posts, title, remove}) => {

  if (!posts.length){
    return (
      <div className="message">
        <h1>Posts not found!</h1>
      </div>
    )
  }


  return (
    <div className="post__list">
         <h1>{title}</h1>
         <TransitionGroup>
            {posts.map((post, index) => 
              <CSSTransition
                key={post.id}
                timeout={500}
                classNames="post"
              >
                <PostItem remove={remove} number={index + 1} key={post.id}  post={post} />
              </CSSTransition>
            )}
         </TransitionGroup>
    </div>
  )
}

export default PostList