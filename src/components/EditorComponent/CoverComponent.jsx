import { Button } from '@material-ui/core'
import React from 'react'
import { randomCover } from '../MainPageComponent/database';
import './EditorStyles.css';

export default function CoverComponent({selectedNote, updateDatabase}) {

  const removeCover = (note)=>{
    note.coverImage = null;
    updateDatabase(note);
  }

  const changeCover = ()=>{
    selectedNote.coverImage = randomCover();
    updateDatabase(selectedNote);
  }

  if(Boolean(selectedNote.coverImage)){
    return (
    <div className="titleCoverContainer">

      <img className="titleCoverImage" src={selectedNote.coverImage} alt=""></img>

      <div className="titleCoverButtons">
        <Button onClick={()=>{removeCover(selectedNote);}}>Remove</Button>
        <Button onClick={()=>{changeCover(selectedNote);}}>Change Cover</Button>
      </div>
      
    </div>
    )
  }else return null;
  
  
}
