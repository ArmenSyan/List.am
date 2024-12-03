import React from 'react'
import HeaderTop from './Header/HeaderTop'
import HeaderCenter from './Header/HeaderCenter'

function Header({dataBase}) {
  return (
    <div className='flex flex-col items-center'>
        <HeaderTop />
        <HeaderCenter categories1={dataBase.categories1} />
    </div>
  )
}

export default Header