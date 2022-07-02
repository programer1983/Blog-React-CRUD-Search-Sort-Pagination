import React from "react";
import "./App.css"
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList"
import MyInput from "./Ui/Input/MyInput";
import Select from "./Ui/Select/Select";


function App() {
  const [posts, setPosts] = React.useState([
    {id: 1, title: 'аа', body: "аа"},
    {id: 2, title: 'гг', body: "гг"},
    {id: 3, title: 'бб', body: "бб"},
  ])

  const [selectedSort, setSelectedSort] =  React.useState("")
  const [searchQuery, setSearchQuery] = React.useState("")

  const sortedPosts = React.useMemo(() => {
    if(selectedSort){
      return [...posts.sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))]
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = React.useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

  }, [searchQuery, sortedPosts])

  const cretaePost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (id) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={cretaePost}/>
        <hr style={{margin: '20px 0' }} />
        <div>
          <MyInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search"
             
          />
          <Select
            value={selectedSort}
            sortPosts={sortPosts}
            defaultUalve="Sort"
            options={[
              {value: 'title', name: 'By name'},
              {value: 'body', name: 'By description'},
            ]}
          />
        </div>
      {sortedAndSearchedPosts.length !== 0 
          ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список Постов"/>
          : <div className="message"><h1>Posts not found!</h1></div>
      }
    </div>
  );
}

export default App;
