import React, { useState } from 'react';
import EditableBlock from './EditableBlock';
import TitleComponent from './TitleComponent';
import './EditorStyles.css';

import { v4 as uid } from 'uuid';
import CoverComponent from './CoverComponent';

export default function EditorComponent({updateDatabase, selectedNote}) {

    const updatePage = (id, html) => {
        let tempNote = selectedNote;
        tempNote.content.find((block)=>block.id === id).html = html;
        updateDatabase(tempNote);
    }

    const addBlock = () => {
        const updatedBlocks = [...selectedNote.content];
        const newBlock = {
            id: uid(),
            html: "<p><br></p>",
        };
        updatedBlocks.push(newBlock);
        selectedNote.content = updatedBlocks;
        updateDatabase(selectedNote);
        // currentBlock.ref.nextElementSibling.focus();
    }

    const deleteBlock = (id) => {
        const contentArray = [...selectedNote.content]; //temp 'content' array
        const newArray = contentArray.filter(block => block.id !== id);
        selectedNote.content = newArray;
        updateDatabase(selectedNote);
    }

 
    if(selectedNote){
        return (
        <div className="Editor">

            {/* COVER */}
            <CoverComponent selectedNote={selectedNote} updateDatabase={updateDatabase}/>

            <div className="mainContentContainer">

                <TitleComponent selectedNote={selectedNote} updateDatabase={updateDatabase}/>
                
                <div className="contentContainer">

                    {selectedNote.content.map((block) => {
                        return (
                            <div  key={block.id}>
                                <EditableBlock
                                    block={block}
                                    updatePage={updatePage}
                                    handleAdd={addBlock}
                                    handleDelete={deleteBlock}
                                />
                            </div>
                        );
                    })}

                    <div className="newBlock" onClick={addBlock} placeholder="/add new block"></div>

                </div>

            </div>

        </div>
    )
    }else return null;
    
}
