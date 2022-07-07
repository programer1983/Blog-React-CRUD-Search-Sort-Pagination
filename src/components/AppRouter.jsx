import React from 'react'
import {Routes,  Route} from "react-router-dom";
import { privateRoutes, publicRoutes } from '../Router/Routes';

const AppRouter = () => {
  const isAuth = false
  
  return (
    isAuth 
    ?
    <Routes>
        {privateRoutes.map((route) =>
          <Route
            key={route.path}
            path={route.path}
            element={<route.element/>}
            exact={route.exact}
          />
        )}
    </Routes>
    :
    <Routes>
      {publicRoutes.map((route) =>
        <Route
          key={route.path}
          path={route.path}
          element={<route.element/>}
          exact={route.exact}
        />
      )}
  </Routes>
)}

export default AppRouter