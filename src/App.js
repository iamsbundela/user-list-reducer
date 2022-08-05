import React, { useReducer } from "react";
import Home from "./components/home/home";
import { AuthContext } from "./context/AuthContext";
import authReducer from "./context/authReducer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [users, dispatch] = useReducer(authReducer, []); 
  return(
    <AuthContext.Provider value={{users, dispatch}}>
      <Home />
    </AuthContext.Provider>
  );
}

export default App;