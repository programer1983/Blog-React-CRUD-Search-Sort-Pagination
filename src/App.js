import React from "react";
import "./App.css"
import PostList from "./components/PostList/PostList";
import MyButton from "./Ui/Button/MyButton";
import MyInput from "./Ui/Input/MyInput";



function App() {
  const [posts, setPosts] = React.useState([
    {id: 1, title: 'Javascript', body: "Discription"},
    {id: 2, title: 'Javascript2', body: "Discription"},
    {id: 3, title: 'Javascript3', body: "Discription"},
  ])
  const [post, setPost] = React.useState({title: "", body: ""})

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: "", body: ""})
  }

  return (
    <div className="App">
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
      <MyButton onClick={addNewPost}>Create post</MyButton>
      <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
