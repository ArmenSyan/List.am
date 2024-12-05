import React from 'react'

function BodyDelevery({ delevery }) {
  return (
    <div className='flex  justify-evenly'>
      {
        delevery.map((el, i) => {
          return <div className='flex flex-col justify-evenly items-start 
          border border-slate-300 hover:border-slate-400 rounded-[10px] w-[180px] h-[400px] p-[10px]' key={i}>

            <img src={el.src} className=' 
              w-[175px] h-[165px] object-cover mt-[10px] rounded-[10px] 
              '
            />

            <strong><p className='text-[18px] mt-[25px] text-[#1A1D3E]'>{el.price} ֏</p></strong>
            <div className='flex text-[13px] bg-[#FF8A24] text-white p-[6px] rounded-[8px] mt-[15px]'>
              <img src='https://www.list.am/img/redesign/icons/buy-with-delivery-label.svg' />
              <p >Գնել առաքումով</p>
            </div>
            <p className='text-[14px] mt-[15px] text-[#1A1D3E] h-[50px]'>{el.text}</p>
          </div>
        })
      }
    </div>
  )
}

export default BodyDelevery