import React from 'react'
import './App.css'
import Header from './Components/Header'
import dataBase from './Data'
function App() {

  return (
    <>
      <Header dataBase={dataBase} />
    </>
  )
}

export default App
