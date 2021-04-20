import React from 'react'
import {DoubleArrowRounded, Check, MoreHoriz} from '@material-ui/icons'; 
import './styles.css';

export default function Header({toggle, isOpen, logout}) {
  return (
    <div className="Header">
      <div className='menuOpenBtnHeader' onClick={()=>toggle(true)}>{(isOpen)?null:<DoubleArrowRounded/>}</div>
      <div className="userHeader">test@test.com</div>
      <div className='shareBtnHeader'>Share</div>
      <div className='updateBtnHeader'><Check/>Updates</div>
      <div className='settingsBtnHeader'><MoreHoriz/></div>
      <div className="logoutBtnHeader" onClick={logout}>Logout</div>
    </div>
  )
}



