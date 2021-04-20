import React from 'react';
import './styles.css';
import { Divider} from '@material-ui/core';
import {SiNotion, SiAddthis} from 'react-icons/si';
import {MenuOpen} from '@material-ui/icons';
import SidebarItemComponent from './SidebarItem';

export default function Sidebar({ isOpen, data, addNote, deleteNote, toggle, selectedNote, setSelectedNote }) {
  if (isOpen) {
    return (
      <div className="Sidebar">
        <div className="SidebarTop">
          <SiNotion className="SiIcons"/> Notion React App
          <MenuOpen className="MenuOpenIcon" onClick={()=>toggle(false)}/>
        </div>

        <Divider />
        
        <div className="NotesSection">
        <div className="NotesSection-heading">NOTES</div>  
        
        {data && data.map((note) => {
          return (
              <SidebarItemComponent 
              key={note._id}
              note={note} 
              selectedNote={selectedNote} 
              setSelectedNote={setSelectedNote} 
              deleteNote={deleteNote}
              />
          );
          })
        }
        </div>
        
        <Divider />

        <div className="newPageBtn" onClick={addNote}>
          <div className="newPageBtnLabel"><SiAddthis className="SiIcons"/> New page</div>  
        </div>

      </div>
    )
  } else return null;

}
