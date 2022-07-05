import React from 'react'
import About from "./../Pages/About/About"
import Error from "./../Pages/Error/Error";
import Posts from "./../Pages/Posts/Posts"
import {Routes,  Route} from "react-router-dom";
import PostPage from '../Pages/PostPage/PostPage';

const AppRouter = () => {
  return (
    <Routes>
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AppRouter