import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginComponent from "./components/LoginComponent/Login.jsx";
import MainComponent from "./components/MainPageComponent/MainComponent.jsx";
import './App.css';
import UseLocalStorage from "./components/LoginComponent/useLocalStorage";

function App() {
  
  const { localStorageData, setLocalStorageData } = UseLocalStorage();
  
  const logout = () => {
    setLocalStorageData(null);
    console.log('logged out successfully!', document.cookie, localStorage.getItem("localStorageData"));
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/login">
          <LoginComponent setLocalStorageData={setLocalStorageData} logout={logout}/>
        </Route>
        <Route exact path="/">
          <MainComponent localStorageData={localStorageData} setLocalStorageData={setLocalStorageData} logout={logout}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
