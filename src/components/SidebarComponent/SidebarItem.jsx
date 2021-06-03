import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core';
import { ArrowRight, DescriptionOutlined, DeleteForeverOutlined, AddBoxOutlined } from '@material-ui/icons';
import './styles.css';

export default function SidebarItem({ note, selectedNote, setSelectedNote, deleteNote }) {

  const modifyDisplayString = (title) => {
    if (title.length > 20) {
      return title.substring(0, 20) + '...';
    }
    else return title;
  };

  const handleDelete = (e) => {
    e.stopPropagation(); 
    deleteNote(note._id);
  }

  const handleAddChildPage = (e) => {
    e.stopPropagation(); 
    console.log("Add Child Page Button, Parent Page:", note )
  }

  return (
    <ListItem className="SidebarItem" 
      selected={selectedNote === note}
      onClick={() => { setSelectedNote(note);}}
    >

      <ArrowRight />

      {Boolean(note.image) ? 
      <img className="sidebarIcon" src={note.image} alt=""></img>
      : <div className="sidebarIcon"><DescriptionOutlined /></div>}
      

      <ListItemText className="textSection" primary={modifyDisplayString(note.title)} />

      <DeleteForeverOutlined className="SidebarItemSettings" onClick={(e) => { handleDelete(e);}} />

      <AddBoxOutlined className="SidebarItemSettings" onClick={(e) => { handleAddChildPage(e);}} />

    </ListItem>
  )
}
