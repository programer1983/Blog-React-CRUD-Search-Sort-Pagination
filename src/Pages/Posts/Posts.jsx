import React from "react";
import { useObserver } from "../../Hooks/useObserver";
import Select from "../../Ui/Select/Select";
import PostService from "./../../API/PostServece"
import MyModal from "./../../components/MyModal/MyModal"
import Pagination from "./../../components/Pagination/Pagination"
import PostFilter from "./../../components/PostFilter/PostFilter";
import PostForm from "./../../components/PostForm/PostForm";
import PostList from "./../../components/PostList/PostList"
import { useFetching } from "./../../Hooks/UseFetching"
import { usePosts } from "./../../Hooks/UsePost";
import MyButton from "./../../Ui/Button/MyButton"
import Loader from "./../../Ui/Loader/Loader"
import { getPageCount} from "./../../Utils/Pages";

function Posts() {
  const [posts, setPosts] = React.useState([])
  const [filter, setFilter] = React.useState({sort: "", query: ""})
  const [modal, setModal] = React.useState(false)
  const [totalPages, setTotalPages] = React.useState(0)
  const [limit, setLimit] = React.useState(10)
  const [page, setPage] = React.useState(1)
  const lastElement = React.useRef()
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1)
  })

  React.useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])

  const cretaePost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (id) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  const changePage = (page) => {
    setPage(page)
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
        <Select
           value={limit}
           onChange={value => setLimit(value)}
           defaultValue="Number of items per page"
           options={[
            {value: 5, name: '5'},
            {value: 10, name: '10'},
            {value: 25, name: '25'},
            {value: -1, name: "show all"},
           ]}
        />
        {postError && <h1>An error has occurred!</h1>}
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список Постов"/>
        <div ref={lastElement} style={{height: 20, background: 'white'}}/>
        {isPostsLoading &&
           <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
            <Loader />
          </div>
        }
       <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
    </div>
  );
}

export default Posts;
