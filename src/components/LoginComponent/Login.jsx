import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button, Typography, CardActions, Divider } from '@material-ui/core';
import { GoogleLogin, GoogleLogout, useGoogleLogout} from 'react-google-login';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SiNotion } from 'react-icons/si';
import UseLocalStorage from './useLocalStorage';

export default function Login({setProfileObject, setLocalStorageData, logout}) {
  
  const [isLoggedIn, setIsLoggedIn] = useState();

  let history = useHistory();

  const responseGoogle = (response) => {
    console.log(`googleResponse`, response);
    setLocalStorageData(response.profileObj);
    // setProfileObject(response.profileObj);

    // axios.post("http://localhost:3001/login", { tokenId: response.tokenId })
    //   .then((res) => {
    //     // console.log(`response of /login route`, res.data);
    //     if (res.data === "success") {
    //       setIsLoggedIn(true);
    //       console.log('logged in successfully!', document.cookie);
    //       history.push("/");
    //     };
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    console.log('logged in successfully!', document.cookie);
    history.push("/");
  }
  const handleLoginFailure = () => {
    console.log('login unsuccessful... try again...');
    history.push("/login");
  }

  const onSuccessfullogout = () => {
    setIsLoggedIn(false);
    logout();
  }
  const handleLogoutFailure = () => {
    console.log('logout unsuccessful... try again...');
    history.push("/login");
  }
  

  const classes = useStyles();

  return (
    <div className={classes.container}>
    
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          <SiNotion className="SiIcons"/> Notion React App
          </Typography>

          <Typography variant="h5" component="h2">
            LOGIN
          </Typography>

          
          <Divider/>

          {isLoggedIn ? 
            <GoogleLogout
              buttonText="Logout"
              onLogoutSuccess={onSuccessfullogout}
              onFailure={handleLogoutFailure}
            >
            </GoogleLogout>
            :
            <GoogleLogin
              clientId="436581585233-tfe7t63pqblerrrn0ua9n7j9hjfv3bki.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={handleLoginFailure}
              cookiePolicy={'single_host_origin'}
            />
          }

        </CardContent>
      </Card>
    
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'

  },
  card: {
    margin: 100,
    minWidth: 400,
    alignSelf: 'center'
  },
  loginWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


{/* <GoogleLogout
              //SHOULDN'T expose Google CLIENT_ID, need to find a way to grab it from server-side?
              clientId="436581585233-tfe7t63pqblerrrn0ua9n7j9hjfv3bki.apps.googleusercontent.com"
              buttonText="Logout" 
              onLogoutSuccess={onSuccessfullogout}
              onFailure={handleLogoutFailure}
            /> */}
