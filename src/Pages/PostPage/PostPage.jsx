import React, { useEffect } from 'react'
import styles from "./PostPage.module.css"
import {useParams} from "react-router-dom"
import { useFetching } from '../../Hooks/UseFetching'
import PostService from '../../API/PostServece'
import Loader from '../../Ui/Loader/Loader'

const PostPage = () => {
  const params = useParams()
  const [post, setPost] = React.useState({})
  const [comment, setComment] = React.useState([])
  const [fetchPostById, isLoading, error] = useFetching( async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })

  const [fetchComment, isComLoading, comError] = useFetching( async (id) => {
    const response = await PostService.getCommentByPostId(id)
    setComment(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComment(params.id)
  }, [])

  return (
    <div>
        <h1>You have opened a post page with ID = ${params.id}</h1>
        {isLoading 
            ? <Loader />
            : <div>{post.id}. {post.title}</div>
        }
        <h1 className={styles.title__post}>
           Comments
        </h1>
        {isComLoading 
            ? <Loader />
            : <div>
                {comment.map((com) =>
                  <div className={styles.information}>
                    <h5>{com.email}</h5>
                    <div>{com.body}</div>
                  </div>
                )}
            </div>
        }
    </div>
  )
}

export default PostPage