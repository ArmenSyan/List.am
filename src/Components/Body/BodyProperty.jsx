import React from 'react'

function BodyProperty({property}) {
  return (
    <div className='flex  justify-evenly flex-wrap w-[1200px]'>
      {
        property.map((el, i) => {
          return <div className='flex flex-col justify-evenly items-start 
          border border-slate-300 hover:border-slate-400 rounded-[10px] w-[180px] h-[350px] p-[10px] mb-[20px]' key={i}>

            <img src={el.src} className=' 
              w-[175px] h-[165px] object-cover rounded-[10px] 
              '
            />

            <strong><p className='text-[18px] mt-[25px]'>{el.price}</p></strong>
            
            <p className='text-[14px]  text-[#1A1D3E] h-[50px]'>{el.text}</p>

            <p className='text-[14px] text-[#88899A]'>{el.type}</p>
          </div>
        })
      }
    </div>
  )
}

export default BodyProperty