import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';
import { SiNotion } from 'react-icons/si';
import GoogleLoginComponent from './GoogleLoginComponent';
import GoogleLogoutComponent from './GoogleLogoutComponent';

export default function Login({ setLocalStorageData, logout }) {

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

          <Divider />
          <GoogleLoginComponent setLocalStorageData={setLocalStorageData} />
          <GoogleLogoutComponent setLocalStorageData={setLocalStorageData} />
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