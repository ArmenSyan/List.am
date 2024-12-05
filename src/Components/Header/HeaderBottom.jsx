import React from 'react'

function HeaderBottom({ categories2 }) {
    return (
        <div className='flex mt-[50px]'>
            {
                categories2.map((el, i) => {
                    return <div className={`p-[10px] m-[10px]
                    border border-slate-300 hover:border-slate-400 
                    bg-[url(${el.bckImg})] bg-[${categories2.bckColor}] 
                    w-[130px] h-[155px] bg-cover bg-center rounded-[10px]`} key={i}>

                        <strong><p className=' text-[13px]'>{el.text}</p></strong>
                    </div>
                })
            }
        </div>
    )
}

export default HeaderBottom