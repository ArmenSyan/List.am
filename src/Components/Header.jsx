import React from 'react'
import HeaderTop from './Header/HeaderTop'
import HeaderCenter from './Header/HeaderCenter'
import HeaderBottom from './Header/HeaderBottom'

function Header({dataBase}) {
  return (
    <div className='flex flex-col items-center'>
        <HeaderTop />
        <HeaderCenter categories1={dataBase.categories1} />
        <HeaderBottom categories2={dataBase.categories2}/>
    </div>
  )
}

export default Header