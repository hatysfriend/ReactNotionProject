import React from 'react';
import {FiSettings, FiTrello} from 'react-icons/fi'

export default function ContentButtons({block, changeSettingsModal}) {
  return (
    <div className="contentButtons">
      <FiSettings className="settingsButton" onClick={changeSettingsModal}/>
      <FiTrello className="optionsButton" onClick={handleOptionsModal}/>
    </div>
  )
}


function handleOptionsModal(){
  console.log(`you have clicked OPTIONS`);
}