import React from 'react'
import {Routes,  Route} from "react-router-dom";
import { AuthContext } from '../Context';
import { privateRoutes, publicRoutes } from '../Router/Routes';
import Loader from '../Ui/Loader/Loader';

const AppRouter = () => {
  const {isAuth, isLoading} = React.useContext(AuthContext)

  if (isLoading){
    return <Loader />
  } 
  
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