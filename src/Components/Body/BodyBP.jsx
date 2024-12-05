import React from 'react'

function BodyBP({ buisnessPages }) {
  return (
    <div className='flex'>
      {
        buisnessPages.map((el,i) => {
          return <div key={i}>
            <img 
            src={el.src}
            className='w-[100px] h-[100px] m-[10px]
            border border-slate-300 hover:border-slate-400
            rounded-[10px]'
            />
          </div>
        })
      }
    </div>
  )
}

export default BodyBP