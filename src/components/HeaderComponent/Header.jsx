import React from 'react'
import {DoubleArrowRounded, Check, MoreHoriz} from '@material-ui/icons'; 
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import './styles.css';
import { Divider } from '@material-ui/core';

export default function Header({toggle, isOpen, profileObject, logout}) {

  const history = useHistory();



  const logoutSuccess = ()=>{
    console.log('logout success')
    logout();
    history.push("/login");
  }

  return (
    <div className="Header">
      <div className="menuOpenBtnHeader" onClick={()=>toggle(true)}>{(isOpen)?null:<DoubleArrowRounded/>}</div>
      <div className="userHeader">{profileObject?.name}</div>
      <img className="profileImage" src={profileObject?.imageUrl} alt="User"></img>
      <div className="shareBtnHeader">Share</div>
      <div className="updateBtnHeader"><Check/>Updates</div>
      <div className="settingsBtnHeader"><MoreHoriz/></div>
      {/* <div className="logoutBtnHeader" onClick={logoutSuccess}>Logout</div> */}
      <GoogleLogout 
        clientId="436581585233-tfe7t63pqblerrrn0ua9n7j9hjfv3bki.apps.googleusercontent.com" 
        onLogoutSuccess={logoutSuccess}
        render={renderProps => (
          <div className="logoutBtnHeader" onClick={renderProps.onClick} disabled={renderProps.disabled}> Logout </div>
        )}
      />
    </div>
  )
}



