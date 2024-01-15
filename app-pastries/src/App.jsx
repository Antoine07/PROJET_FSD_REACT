import { useEffect, useState } from 'react'
import './App.scss'

import { useDispatch, useSelector } from "react-redux";

import { addMessage, fetchPastries } from './stores/index'

function App() {
  const { messages } = useSelector(s => s.m)
  const { pastries } = useSelector(s => s.p)
  const dispatch = useDispatch(); // action qui permet de dispatcher une action dans le store

  // const [ppastries, setPpastries] = useState([]);
  // // async gérer les fonctions asynchrones
  // useEffect(() => {
  //   async function getPastries() {
  //     const response = await fetch("http://localhost:3001/game/pastries");
  //     const pastries = await response.json();
  //     setP(pastries)
  //   }

  //   getPastries()
  // }, [])

  return (
    <>
     

      {messages.length > 0 && (
        <ul>
          {messages.map((m, i) => <li key={i} >{m}</li>)}
        </ul>
      )}
      <p><button onClick={()=> dispatch(addMessage('cdefgh')) }>Add message</button></p>
      <p><button onClick={()=> dispatch(fetchPastries()) }>get pastries</button></p>
      {pastries && (
        <ul>
          {pastries.map((p) => <li key={p.id} >{p.name}</li>)}
        </ul>
      )}
    </>
  )
}

export default App
