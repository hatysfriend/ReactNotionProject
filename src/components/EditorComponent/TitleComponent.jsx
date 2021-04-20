import React, { useState, useRef } from 'react';
import ContentEditable from 'react-contenteditable';
import { BsImage, BsCircleSquare } from 'react-icons/bs';
import {randomImage, randomCover} from '../../database.js';

import './EditorStyles.css';
import IconComponent from './IconComponent';

export default function TitleComponent({ selectedNote, updateDatabase }) {

  const titleRef = useRef();

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      titleRef.current.el.current.blur();
    }
  }

  const handleBlur = (e) => {
    console.log(e.target.textContent);
    console.log(e.target.innerHTML);
    selectedNote.title = e.target.textContent.trim(); //trim() removes white spaces(including tabs, line-breaks) in-front & beyond-end of text
    updateDatabase(selectedNote);
  };

  const randomIcon = (selectedNote)=>{
    selectedNote.image = randomImage();
    updateDatabase(selectedNote);
  }

  const randomCoverImage = (selectedNote)=>{
    selectedNote.coverImage = randomCover();
    updateDatabase(selectedNote);
  }


  return (
    <div className="titleContainer">

      {/* ICON */}
      <IconComponent selectedNote={selectedNote} updateDatabase={updateDatabase}/>

      {/* ICON-COVER Buttons */}
      <div className="titleButtons">
        { (!Boolean(selectedNote.image)) && <div className="iconButton" onClick={()=>{randomIcon(selectedNote);}}><BsImage className="react-icon" />Add Icon</div>}
        { (!Boolean(selectedNote.coverImage)) && <div className="coverButton" onClick={()=>{randomCoverImage(selectedNote);}}><BsCircleSquare className="react-icon" />Add Cover</div>}
      </div>

      {/* TITLE */}
      <ContentEditable className="pageComponentTitle" placeholder="Page Title Goes Here..." onBlur={handleBlur} html={selectedNote.title} onKeyDown={handleOnKeyDown} ref={titleRef} />

    </div>
  )
}


