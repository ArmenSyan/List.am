import React from 'react'

function HeaderCenter({ categories1 }) {
    return (
        <div className='grid grid-cols-5 gap-4 mt-8 w-[1000px]'>
            {
                categories1.map((el, i) => {
                    return <div className='flex items-center gap-1.5' key={i} >
                        <img src={el.icon} className='text-[14px] pb-1.5'  />
                        <p>{el.text}</p>
                    </div>
                })
            }
        </div>
    )
}
export default HeaderCenter
