import React from "react";
import "./App.css"
import MyModal from "./components/MyModal/MyModal";
import PostFilter from "./components/PostFilter/PostFilter";
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList"
import MyButton from "./Ui/Button/MyButton";

function App() {
  const [posts, setPosts] = React.useState([
    {id: 1, title: 'аа', body: "аа"},
    {id: 2, title: 'гг', body: "гг"},
    {id: 3, title: 'бб', body: "бб"},
  ])

  const [filter, setFilter] = React.useState({sort: "", query: ""})
  const [modal, setModal] = React.useState(false)
  
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
    setModal(false)
  }

  const removePost = (id) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)} style={{marginTop: "50px"}}>
        Create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={cretaePost}/>
      </MyModal>
        <hr style={{margin: '20px 0' }} />
        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список Постов"/>
    </div>
  );
}

export default App;
