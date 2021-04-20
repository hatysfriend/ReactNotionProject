import React, { useState } from 'react';
import IconModalComponent from '../modals/IconModalComponent';
import './EditorStyles.css';

export default function IconComponent({selectedNote, updateDatabase}) {

  const [iconModal, setIconModal] = useState(false);

  if(Boolean(selectedNote.image) && Boolean(selectedNote.coverImage)){
    return(
      <React.Fragment>
        <img className="titleIcon-cover" src={selectedNote.image} alt="" onClick={()=>{setIconModal(true)}}></img>

        {/* ICON MODAL */}
        <IconModalComponent
          selectedNote={selectedNote}
          updateDatabase={updateDatabase}
          isOpen={iconModal}
          onClose={() => { setIconModal(false) }}
        />
      </React.Fragment>
    );
  }else if(Boolean(selectedNote.image)){
    return(
      <React.Fragment>
        <img className="titleIcon" src={selectedNote.image} alt="" onClick={()=>{setIconModal(true)}}></img>

        {/* ICON MODAL */}
        <IconModalComponent
          selectedNote={selectedNote}
          updateDatabase={updateDatabase}
          isOpen={iconModal}
          onClose={() => { setIconModal(false) }}
        />
      </React.Fragment>
    );
  }
  else return null;
  
  
}
