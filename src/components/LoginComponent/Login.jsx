import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button, Typography, CardActions, Divider } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SiNotion } from 'react-icons/si';

async function loginUser(credentials) {
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {

  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  const history = useHistory();

  const responseGoogle = (response) => {
    // console.log(response);
    axios.post("http://localhost:3001/login", { tokenId: response.tokenId })
      .then((res) => {
        if (res.data === "success") {
          signOut();// ?
          // location.assign('/dashboard');
          history.push("/");
        };
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function signOut() {
    // var auth2 = gapi.auth2.getAuthInstance();
    // auth2.signOut().then(function () {
    //   console.log("User signed out of Google.");
    // });
  }

  // const logout = (res) => {
  //   res.clearCookie('sessiontoken');
  //   res.redirect('/login');
  // }

  function googleLogin() {
    axios.get("http://localhost:3001/auth/google")
    .then((req, res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.error(err);
    })
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

          <div className={classes.loginWrapper}>
            <form onSubmit={handleSubmit}>
              <label>
                <p>Username</p>
                <input type="text" placeholder="Email" onChange={e => setUsername(e.target.value)} />
              </label>
              <label>
                <p>Password</p>
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              </label>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>


          <GoogleLogin
            clientId="436581585233-tfe7t63pqblerrrn0ua9n7j9hjfv3bki.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <CardActions>
            <Button onClick={googleLogin}>Google Login</Button>
            <Button onClick={signOut}>Sign-out</Button>
          </CardActions>


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

