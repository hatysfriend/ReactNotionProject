import axios from 'axios';

const mongoDBapi = axios.create({baseURL:"http://localhost:3001/notes/"});

export const logout = ()=>{
  console.log(`logout...`);
  axios.get("http://localhost:3001/logout")
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.error(err);
  })
}

export const getAllAPI = ()=>{
  return mongoDBapi.get();
}

export const addNoteAPI = (noteObj)=>{
  return mongoDBapi.post("", noteObj)
  .then((response)=>{
      return response.data;
  })
  .catch((err)=>{
      console.error(`ADD API: ${err}`);
  })
} 

export const getNoteByIdAPI = (id)=>{
  return mongoDBapi.get(`${id}`)
  .then((response)=>{
      return response.data;
  })
  .catch((err)=>{
      console.error(`Get Note API: ${err}`);
  })
}

export const updateNoteAPI = (id, noteObj)=>{
  return mongoDBapi.patch(`${id}`, noteObj)
  .then((response)=>{
      return response.data;
  })
  .catch((err)=>{
      console.error(`UPDATE API: ${err}`);
  })
}

export const deleteNoteAPI = (id)=>{
  return mongoDBapi.delete(`${id}`)
  .then((response)=>{
      return response.data;
  })
  .catch((err)=>{
      console.error(`DELETE API: ${err}`);
  })
}
