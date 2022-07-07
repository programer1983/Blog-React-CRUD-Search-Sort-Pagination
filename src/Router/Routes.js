import About from "./../Pages/About/About"
import Posts from "./../Pages/Posts/Posts"
import PostPage from "./../Pages/PostPage/PostPage"
import Login from "./../Pages/Login/Login"

export const privateRoutes = [
    {path: '/about', element: About, exact: true},
    {path: '/posts', element: Posts, exact: true},
    {path: '/posts/:id', element: PostPage, exact: true},
    {path: '*', element: Posts, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: Login, exact: true},
    {path: '*', element: Login, exact: true},
]