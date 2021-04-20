import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import { Divider, Button, Menu, MenuItem } from '@material-ui/core';

export default function IconModalComponent({ selectedNote, updateDatabase, isOpen, onClose }) {

  const inputRef = useRef();

  const removeIcon = (selectedNote)=>{
    selectedNote.image = null;
    updateDatabase(selectedNote);
  }

  const addIcon = (imgLink)=>{
    selectedNote.image = imgLink;
    updateDatabase(selectedNote);
  }

  if (!isOpen) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <>
        <div className="overlayModal" onClick={onClose}></div>
        <div className="SettingsModal" >

          {/* ---MODAL CONTENT--- */}
          <div className="IconModalNavbar">
            <h1>Link</h1>
            <Button onClick={()=>{removeIcon(selectedNote); onClose();}}>Remove</Button>
          </div>

          <Divider />

          <div className="IconModalInput"><input ref={inputRef} placeholder="Paste an Image Link" onInput={(e)=>{inputRef.current = e.target.value}}/></div>
          <Button onClick={()=>{addIcon(inputRef.current); onClose();}}>Submit</Button>

        </div>
      </>
      ,
      document.getElementById('portal')
    )
  }

}




//---Material-UI SimpleMenu Example---
export function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}




