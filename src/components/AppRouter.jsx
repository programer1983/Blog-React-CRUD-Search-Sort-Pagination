import React from 'react'
import About from "./../Pages/About/About"
import Error from "./../Pages/Error/Error";
import Posts from "./../Pages/Posts/Posts"
import {Routes,  Route} from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AppRouter