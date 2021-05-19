import { useState } from 'react';

//Custom Hook
export default function useLocalStorage() {
  const initialiseToken = () => {
    const data = localStorage.getItem('localStorageData');
    const dataObject = JSON.parse(data);
    console.log(`checking local storage for 'data': ${dataObject}`);
    return dataObject;
  };

  const saveData = (data) => {
    console.log('saving data to LocalStorage', data);
    localStorage.setItem('localStorageData', JSON.stringify(data));
    setLocalStorage(data);

    //Remove localStorageData if received data is null
    if(!data){localStorage.removeItem('localStorageData')}; 
  };

  const [localStorageData, setLocalStorage] = useState(initialiseToken);

  return {
    localStorageData: localStorageData,
    setLocalStorageData: saveData,
  }
}
