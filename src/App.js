import React from "react";
import { BrowserRouter, Routes,  Route} from "react-router-dom";
import "./App.css"
import About from "./Pages/About/About"
import Error from "./Pages/Error/Error";
import Posts from "./Pages/Posts/Posts"
import Navbar from "./Ui/Navbar/Navbar";


function App() {
    return (
      <BrowserRouter>
       <Navbar />
       <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
       </Routes>
      </BrowserRouter>
    )
}

export default App;
