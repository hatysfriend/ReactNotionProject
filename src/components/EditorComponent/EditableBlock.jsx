import React, {useState} from 'react';
import ReactQuill from 'react-quill';

// import CustomQuillToolbar, { modules, formats } from '../CustomQuill/CustomQuillToolbar';
import SettingsModalComponent from '../modals/SettingsModalComponent';
import ContentButtons from './ContentButtons';


import './EditorStyles.css';
import 'react-quill/dist/quill.bubble.css'

export default function EditableBlock({ block, updatePage, handleAdd, handleDelete }) {

  const [settingsModal, setSettingsModal] = useState(false);
  // const [previousKey, setPreviousKey] = useState(null);
  const [empty, setEmpty] = useState('');
  
  const onKeyDownHandler = (e) => { 
    (block.html==="<p><br></p>") ? setEmpty(true) : setEmpty(false);
    if (empty) {
      if(e.key === "Backspace"){
        console.log(`readyToDelete+backspace PRESSED`)
        e.preventDefault();
        handleDelete(block.id);
      }
      if(e.key === "Delete"){
        console.log(`readyToDelete+DELETE PRESSED`)
        e.preventDefault();
        handleDelete(block.id);
      }
      if(e.key === "/"){
        console.log(`You Pressed /`);
        e.preventDefault();
        setSettingsModal(true);
      }
    }

    // need to prevent default Enter (line break) and insert new block underneath the block that is being edited.
    // if (e.key === "Enter") {
    //   e.preventDefault();
    //   handleAdd();
    // }
    
    // setPreviousKey(e.key);
  }


  const handleOnChange = (val)=>{
    if(block.html !== val){
      // console.log(`onChange called val: ${val}`);
      updatePage(block.id, val);
    }
  }

  const onBlockFocus =()=>{
    //check if block is empty?
    (block.html==="<p><br></p>") ? setEmpty(true) : setEmpty(false);
  }

  return (
    <div className="blockContainer">
      <ContentButtons
        block={block}
        changeSettingsModal={() => { setSettingsModal(true) }}
      />
      {/* <CustomQuillToolbar className="CustomerQuillToolbar" /> */}
      <ReactQuill className="ReactQuill"
        value={block.html}
        onFocus={onBlockFocus}
        onChange={handleOnChange}
        onKeyDown={onKeyDownHandler}
        placeholder="Type '/' for commands"
        // modules={modules}
        // formats={formats}
        theme="bubble"
      />
      <SettingsModalComponent
        block={block}
        isOpen={settingsModal}
        onClose={() => { setSettingsModal(false) }}
        handleDelete={handleDelete}
        handleAdd={handleAdd}
      />
    </div>
  )

}

