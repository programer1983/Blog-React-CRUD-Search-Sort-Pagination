import React from "react";
import "./App.css"
import PostFilter from "./components/PostFilter/PostFilter";
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList"

function App() {
  const [posts, setPosts] = React.useState([
    {id: 1, title: 'аа', body: "аа"},
    {id: 2, title: 'гг', body: "гг"},
    {id: 3, title: 'бб', body: "бб"},
  ])

  const [filter, setFilter] = React.useState({sort: "", query: ""})
  
  const sortedPosts = React.useMemo(() => {
    if(filter.sort){
      return [...posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))]
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = React.useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const cretaePost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (id) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  return (
    <div className="App">
      <PostForm create={cretaePost}/>
        <hr style={{margin: '20px 0' }} />
        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список Постов"/>
    </div>
  );
}

export default App;
