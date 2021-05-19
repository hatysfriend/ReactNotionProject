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
      <button onClick={signOut} className={classes.button}>
      <img src="google.svg" alt="google login" className={classes.icon}></img>
      <span className={classes.buttonText}>Sign out</span>
    </button>
    </div>
    
  )
}

const useStyles = makeStyles({
  // button: {
  //   cursor: 'pointer',
  //   display: 'block',
  //   fontSize: '1.3em',
  //   boxSizing: 'content-box',
  //   margin: '20px auto 0px',
  //   width: '70%',
  //   padding: '15px 20px',
  //   borderRadius: '24px',
  //   borderColor: 'transparent',
  //   backgroundColor: 'white',
  //   boxShadow: '0px 16px 60px rgba(78, 79, 114, 0.08)',
  //   position: 'relative',
  // },
  // buttonText: {
  //   color: '#4285f4',
    
  // },
  // icon: {
  //   height: '25px',
  //   width: '25px',
  //   marginRight: '0px',
  //   position: 'absolute',
  //   left: '30px',
  //   alignItems: 'center',
  // }
});