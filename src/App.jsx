import React from 'react'
import Header from './Components/Header'
import dataBase from './Data'
import Body from './Components/Body'
import Footer from './Components/Footer'
function App() {

  return (
    <div className='flex flex-col justify-evenly items-center text-[#1A1D3C] '>
      <Header dataBase={dataBase} />
      <Body  dataBase={dataBase}/>
      <Footer />
    </div>
  )
}

export default App
