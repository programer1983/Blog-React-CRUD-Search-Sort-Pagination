import React, { useEffect } from "react";
import { BrowserRouter} from "react-router-dom";
import "./App.css"
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./Context";
import Navbar from "./Ui/Navbar/Navbar";


function App() {
  const [isAuth, setIsAuth] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    if (localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

    return (
      <AuthContext.Provider
         value = {{
          isAuth,
          setIsAuth,
          isLoading,
         }}
      >
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    )
}

export default App;
