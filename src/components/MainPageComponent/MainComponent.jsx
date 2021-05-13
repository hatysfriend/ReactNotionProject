import React, {useState, useEffect} from 'react';
import EditorComponent from "../../components/EditorComponent/Editor.jsx";
import HeaderComponent from "../../components/HeaderComponent/Header.jsx";
import SidebarComponent from "../../components/SidebarComponent/Sidebar.jsx";

import { v4 as uid } from "uuid";
import { localDB } from "./database";
import { getAllAPI, addNoteAPI, updateNoteAPI, deleteNoteAPI} from "./axios";

import './styles.css';

export default function MainComponent({localStorageData, logout}) {

  
  const [data, setData] = useState();

  const [selectedNote, setSelectedNote] = useState();

  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    getAllAPI()
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(`Unable to connect to DB... Did you run MongoDB Server Application?`);
        setData(localDB);
        console.error(`GETALL API: ${err}`);
      });
  }, []);

  const updateDatabase = (noteObj) => {
    const allNotes = [...data]; //create temp array with all of the data from db
    const index = allNotes.indexOf(noteObj); //get index of noteObj from param
    allNotes[index] = noteObj; //replace note with new noteObj in the temp array
    setData(allNotes);
    updateNoteAPI(noteObj._id, noteObj);
  };

  const addNote = () => {
    let newNoteObj = {
      title: "",
      content: [],
    };

    const allNotes = [...data];

    addNoteAPI(newNoteObj)
      .then((response) => {
        if(response){
          allNotes.push(response); //add newly added note to the temp array
          setData(allNotes); //replace state array with the temp array
          setSelectedNote(response);
        }else{
          console.log("no response");
          newNoteObj._id = uid();
          allNotes.push(newNoteObj); 
          setData(allNotes); 
          setSelectedNote(newNoteObj);
        }
      })
  };

  const deleteNote = (id) => {
    deleteNoteAPI(id);
    const filteredArray = data.filter((note) => note._id !== id); //filter out the deleted note
    setData(filteredArray); //replace state array with filteredArray
    setSelectedNote(data[0]);
  };
  


  //Behaves like a guard, if not authorised, then redirect to Login page.
  // if(!authorised) {
  //   return <Redirect to="/login" />
  // }
  return (
    <div className="MainPage">
      <SidebarComponent
        data={data}
        toggle={setShowSidebar}
        isOpen={showSidebar}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
        addNote={addNote}
        deleteNote={deleteNote}
      />
      <HeaderComponent toggle={setShowSidebar} isOpen={showSidebar} profileObject={localStorageData} logout={logout}/>
      <EditorComponent
        updateDatabase={updateDatabase}
        selectedNote={selectedNote}
      />
    </div>
  )
}
