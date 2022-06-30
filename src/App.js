import React from "react";
import "./App.css"
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList"


function App() {
  const [posts, setPosts] = React.useState([
    {id: 1, title: 'Javascript', body: "Discription"},
    {id: 2, title: 'Javascript2', body: "Discription"},
    {id: 3, title: 'Javascript3', body: "Discription"},
  ])

  const cretaePost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <PostForm create={cretaePost}/>
      <PostList posts={posts} title="Список Постов"/>
    </div>
  );
}

export default App;
