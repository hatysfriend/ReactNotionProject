import React, { useState, useEffect } from "react";
import { BrowserRouter, useHistory, Route, Switch } from "react-router-dom";
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

  // const insertGapiScript = ()=>{
  //   const script = document.createElement('script');
  //   script.src = 'https://apis.google.com/js/plaform.js';
  //   script.onload = ()=>{
  //     initializeGoogleSignIn();
  //   }
  //   document.body.appendChild(script);
  // }

  // function initializeGoogleSignIn() {
  //   console.log('trying to initialise Google SignIn API');
  //   window.gapi.load('auth2', () => {
  //     window.gapi.auth2.init({
  //       client_id: '436581585233-tfe7t63pqblerrrn0ua9n7j9hjfv3bki.apps.googleusercontent.com'
  //     })
  //     console.log('api inited');

  //     // window.gapi.load('signin2', () =>{
  //     //   const params = {
  //     //     onSuccess: ()=>{
  //     //       console.log('User has finished signing in!');
  //     //     }
  //     //   }
  //     //   window.gapi.signin2.render('loginButton', params);
  //     // })
  //   })
  // }

  // useEffect(()=>{
  //   console.log('loading');
  //   insertGapiScript();
  // },[])

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/login">
          <LoginComponent setLocalStorageData={setLocalStorageData} logout={logout}/>
        </Route>
        <Route exact path="/">
          <MainComponent localStorageData={localStorageData} logout={logout}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
