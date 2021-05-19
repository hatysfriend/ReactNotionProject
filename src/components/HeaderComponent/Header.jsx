import React from 'react'
import {DoubleArrowRounded, Check, MoreHoriz} from '@material-ui/icons';
import GoogleLogoutComponent from '../LoginComponent/GoogleLogoutComponent'
import './styles.css';

export default function Header({toggle, isOpen, profileObject, logout, setLocalStorageData}) {

  return (
    <div className="Header">
      <div className="menuOpenBtnHeader" onClick={()=>toggle(true)}>{(isOpen)?null:<DoubleArrowRounded/>}</div>
      <div className="userHeader">{(profileObject?.name) ? profileObject?.name : <div className="userHeader-2">User</div>}</div>
      <img className="profileImage" src={profileObject?.imageUrl} alt=""></img>
      <div className="shareBtnHeader">Share</div>
      <div className="updateBtnHeader"><Check/>Updates</div>
      <div className="settingsBtnHeader"><MoreHoriz/></div>
      {/* <div className="logoutBtnHeader" onClick={logoutSuccess}>Logout</div> */}
      
      <GoogleLogoutComponent 
        setLocalStorageData={setLocalStorageData}
      />
    </div>
  )
}



