import React from "react";
import PostService from "./API/PostServece";
import "./App.css"
import MyModal from "./components/MyModal/MyModal";
import PostFilter from "./components/PostFilter/PostFilter";
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList"
import { usePosts } from "./Hooks/UsePost";
import MyButton from "./Ui/Button/MyButton";
import Loader from "./Ui/Loader/Loader";

function App() {
  const [posts, setPosts] = React.useState([])
  const [filter, setFilter] = React.useState({sort: "", query: ""})
  const [modal, setModal] = React.useState(false)
  const [isPostsLoading, setIsPostsLoading] = React.useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  async function fetchPost(){
    setIsPostsLoading(true)
    setTimeout( async () => {
      const posts = await PostService.getAll()
      setPosts(posts)
      setIsPostsLoading(false)
    }, 1000)
  }

  React.useEffect(() => {
    fetchPost()
  }, [])

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
        {isPostsLoading 
          ? <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}><Loader /></div>
          : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список Постов"/>
        }
    </div>
  );
}

export default App;
