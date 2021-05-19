import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';
import { SiNotion } from 'react-icons/si';
import GoogleLoginComponent from './GoogleLoginComponent';
import GoogleLogoutComponent from './GoogleLogoutComponent';

export default function Login({ setLocalStorageData, logout }) {

  const classes = useStyles();

  return (
    <div className={classes.container}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <SiNotion className="SiIcons" /> Notion React App
        </Typography>

        <Typography className={classes.title2} variant="h5" component="h2">
          Login
        </Typography>

        <Divider />

        <GoogleLoginComponent setLocalStorageData={setLocalStorageData} />
        <GoogleLogoutComponent setLocalStorageData={setLocalStorageData} />
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    width: '350px',
    height: '250px',
    backgroundColor: 'white',
    position: 'absolute', 
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    padding: '30px 10px',
    
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'none',
    borderRadius: '5px',

  },
  title: {
    fontSize: 16,
    margin: '0px 10px',
  },
  title2: {
    margin: '5px 10px',
  }
});