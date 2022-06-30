import React from 'react'
import MyInput from "./../../Ui/Input/MyInput"
import MyButton from "./../../Ui/Button/MyButton"
import styles from "./PostForm.module.css"


const PostForm = ({create}) => {
  const [post, setPost] = React.useState({title: "", body: ""})

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
        ...post,
        id: Date.now(),
    }
    create(newPost)
    setPost({title: "", body: ""})
}
   
  return (
    <form className={styles.postForm}>
        <MyInput
        value={post.title}
        onChange={(e) => setPost({...post, title: e.target.value})}
        type="text" 
        placeholder="Post title"
        />
        <MyInput
        value={post.body}
        onChange={(e) => setPost({...post, body: e.target.value})}
        type="text" 
        placeholder="Discription"
        />
        <div className={styles.button}>
           <MyButton onClick={addNewPost}>Create post</MyButton>
        </div>
    </form>
  )
}

export default PostForm