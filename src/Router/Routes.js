import About from "./../Pages/About/About"
import Posts from "./../Pages/Posts/Posts"
import PostPage from "./../Pages/PostPage/PostPage"

export const routes = [
    {path: '/about', element: About, exact: true},
    {path: '/posts', element: Posts, exact: true},
    {path: '/posts/:id', element: PostPage, exact: true},
    {path: '*', element: Posts, exact: true},
]