import React from 'react'
import { useGoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { refreshTokenSetup } from '../LoginComponent/RefreshToken'
import { makeStyles } from '@material-ui/core/styles';

export default function GoogleLoginComponent({setLocalStorageData}) {

  let history = useHistory();

  const onSuccess = (res) => {
    console.log("[Login Success!] currentUser:", res.profileObj);
    setLocalStorageData(res.profileObj);
    refreshTokenSetup(res);
    history.push("/");
  }

  const onFailure = (res) => {
    console.log("[Login Failed...] res:", res);
  }

  const {signIn} = useGoogleLogin({
    onSuccess: onSuccess,
    onFailure: onFailure,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    isSignedIn: true,
    accessType:'offline',
  });

  const classes = useStyles();

  return (
    <div>
      <button onClick={signIn} className={classes.button}>
      <img src="google.svg" alt="google login" className={classes.icon}></img>
      <span className={classes.buttonText}>Sign in with Google</span>
    </button>
    </div>
  )
}

const useStyles = makeStyles({
  button: {
    position: 'relative',
    cursor: 'pointer',
    display: 'block',
    fontSize: '1.2em',
    boxSizing: 'content-box',
    margin: '20px auto 0px',
    width: '70%',
    padding: '15px 20px',
    // borderRadius: '18px',
    borderColor: 'transparent',
    backgroundColor: 'rgba(47, 52, 55, 1)',
    boxShadow: '0px 16px 60px rgba(78, 79, 114, 0.38)',
    textAlign: 'center',
    
    '&:hover': {
      background: 'rgba(47, 52, 55, 0.9)',
    }
  },
  buttonText: {
    color: 'white',
    
  },
  icon: {
    marginRight:'5px',
    height: '25px',
    width: '25px',
    alignItems: 'center',
  }
});