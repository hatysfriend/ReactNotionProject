import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

export default function GoogleLogoutComponent({setLocalStorageData}) {

  let history = useHistory();

  const onLogoutSuccess = () => {
    setLocalStorageData(null);
    history.push("/login");
    // alert('Successfully Logged Out.');
  }

  const onFailure = (res) => {
    console.log("[Logout Failed...] res:", res);
  };

  const { signOut } = useGoogleLogout({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    onLogoutSuccess: onLogoutSuccess,
    onFailure: onFailure,
  });

  const classes = useStyles();

  return (
    <div>
      <div onClick={signOut} className={classes.button}>
        <img src="google.svg" alt="google login" className={classes.icon}></img>
        <span className={classes.buttonText}>Sign out</span>
      </div>
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