import axios from 'axios';

// const localURI ="http://localhost:3001/";
const herokuAPI = "https://mongodb-server-app.herokuapp.com/"
const mongoDBapi = axios.create({baseURL:herokuAPI});

export const login = (tokenId) => {
  mongoDBapi.post("login", { tokenId: tokenId })
  .then((res) => {
    if (res.data === "success") {
      
    };
  })
  .catch((err) => {
    console.error(err);
  });
}

export const logout = ()=>{
  console.log(`logout...`);
  mongoDBapi.get("logout")
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.error(err);
  })
}

export const getAllAPI = ()=>{
  return mongoDBapi.get("notes");
}

export const addNoteAPI = (noteObj)=>{
  return mongoDBapi.post("notes", noteObj)
  .then((response)=>{
      return response.data;
  })
  .catch((err)=>{
      console.error(`ADD API: ${err}`);
  })
} 

export const getNoteByIdAPI = (id)=>{
  return mongoDBapi.get(`notes/${id}`)
  .then((response)=>{
      return response.data;
  })
  .catch((err)=>{
      console.error(`Get Note API: ${err}`);
  })
}

export const updateNoteAPI = (id, noteObj)=>{
  return mongoDBapi.patch(`notes/${id}`, noteObj)
  .then((response)=>{
      return response.data;
  })
  .catch((err)=>{
      console.error(`UPDATE API: ${err}`);
  })
}

export const deleteNoteAPI = (id)=>{
  return mongoDBapi.delete(`notes/${id}`)
  .then((response)=>{
      return response.data;
  })
  .catch((err)=>{
      console.error(`DELETE API: ${err}`);
  })
}
