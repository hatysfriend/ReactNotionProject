import React from 'react'
import { useGoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { refreshTokenSetup } from '../LoginComponent/RefreshToken';

export default function GoogleLoginComponent({setLocalStorageData, buttonStyle, buttonTextStyle, iconStyle}) {

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

  return (
    <div>
      <button onClick={signIn} className={buttonStyle}>
        <img src="google.svg" alt="" className={iconStyle}></img>
        <span className={buttonTextStyle}>Sign in with Google</span>
      </button>
    </div>
  )
}