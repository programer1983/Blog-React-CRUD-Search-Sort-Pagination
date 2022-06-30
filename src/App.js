import React from "react"
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

  
  return (
    <div className="App">
      <MyInput type="text" placeholder="Post title"/>
      <MyInput type="text" placeholder="Discription"/>
      <MyButton>Create post</MyButton>
      <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
