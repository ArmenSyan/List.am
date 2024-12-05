import React from 'react'
import Header from './Components/Header'
import dataBase from './Data'
import Body from './Components/Body'
function App() {

  return (
    <div className='flex flex-col justify-evenly items-center'>
      <Header dataBase={dataBase} />
      {/* <Body  dataBase={dataBase}/> */}
    </div>
  )
}

export default App
