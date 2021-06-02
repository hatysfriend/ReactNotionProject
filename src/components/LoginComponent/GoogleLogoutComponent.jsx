import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';

export default function GoogleLogoutComponent({setLocalStorageData, buttonStyle, buttonTextStyle, iconStyle}) {

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


  return (
    <div>
      <div onClick={signOut} className={buttonStyle}>
        <img src="google.svg" alt="google login" className={iconStyle}></img>
        <span className={buttonTextStyle}>Sign out</span>
      </div>
    </div>
    
  )
}
