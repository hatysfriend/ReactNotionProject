import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import { Divider, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import * as MaterialIcons from '@material-ui/icons';

export default function SettingsModalComponent({ block, isOpen, onClose, handleAdd, handleDelete}) {
  
  if (!isOpen) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <>
      <div className="overlayModal"  onClick={onClose}></div>
        <div className="SettingsModal" >

        {/* ---MODAL CONTENT--- */}
        <List>

          <ListItem button onClick={()=>{handleDelete(block.id); onClose();}}>
            <ListItemIcon>
              <MaterialIcons.Delete />
            </ListItemIcon>
            <ListItemText primary="Delete" />
          </ListItem>

          <ListItem button onClick={onClose}>
            <ListItemIcon>
              <MaterialIcons.ControlPointDuplicate />
            </ListItemIcon>
            <ListItemText primary="Duplicate" />
          </ListItem>

          <ListItem button onClick={onClose}>
            <ListItemIcon>
              <MaterialIcons.Link />
            </ListItemIcon>
            <ListItemText primary="Copy link" />
          </ListItem>
          
          <Divider/>

          <ListItem button onClick={onClose}>
            <ListItemIcon>
              <MaterialIcons.Comment />
            </ListItemIcon>
            <ListItemText primary="Comment" />
          </ListItem>

          <Divider/>

          <ListItem button onClick={onClose}>
            <ListItemIcon>
              <MaterialIcons.ColorLensOutlined />
            </ListItemIcon>
            <ListItemText primary="Colour" />
          </ListItem>

        </List>

      </div>
      </>
      ,
      document.getElementById('portal')
    )
  }

}


