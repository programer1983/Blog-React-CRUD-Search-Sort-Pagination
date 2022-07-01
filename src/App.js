import React from "react";
import "./App.css"
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList"
import Select from "./Ui/Select/Select";


function App() {
  const [posts, setPosts] = React.useState([
    {id: 1, title: 'аа', body: "аа"},
    {id: 2, title: 'гг', body: "гг"},
    {id: 3, title: 'бб', body: "бб"},
  ])

  const [selectedPost, setSelectedPost] =  React.useState("")

  const cretaePost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (id) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  const sortPosts = (sort) => {
    setSelectedPost(sort)
    setPosts([...posts.sort((a, b) => a[sort].localeCompare(b[sort]))])
  }

  return (
    <div className="App">
      <PostForm create={cretaePost}/>
        <hr style={{margin: '20px 0' }} />
        <div>
          <Select
            value={selectedPost}
            sortPosts={sortPosts}
            defaultUalve="Sort"
            options={[
              {value: 'title', name: 'By name'},
              {value: 'body', name: 'By description'},
            ]}
          />
        </div>
      {posts.length !== 0 
          ? <PostList remove={removePost} posts={posts} title="Список Постов"/>
          : <div className="message"><h1>Posts not found!</h1></div>
      }
    </div>
  );
}

export default App;
