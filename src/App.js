import React from "react";
import "./App.css"
import PostList from "./components/PostList/PostList";
import MyButton from "./Ui/Button/MyButton";
import MyInput from "./Ui/Input/MyInput";



function App() {
  const [title, setTitle] = React.useState("")
  const [posts, setPosts] = React.useState([
    {id: 1, title: 'Javascript', body: "Discription"},
    {id: 2, title: 'Javascript2', body: "Discription"},
    {id: 3, title: 'Javascript3', body: "Discription"},
  ])
  const bodyInputRef = React.useRef()

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(bodyInputRef.current.value)

  }

  
  return (
    <div className="App">
      <MyInput
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         type="text" 
         placeholder="Post title"
      />
      <MyInput
        ref={bodyInputRef}
        type="text" 
        placeholder="Discription"
      />
      <MyButton onClick={addNewPost}>Create post</MyButton>
      <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
