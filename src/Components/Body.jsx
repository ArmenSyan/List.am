import React from 'react'
import BodyBP from './Body/BodyBP'
// import BodyDelevery from './Body/BodyDelevery'

function Body({ dataBase }) {
    return (
        <div className='flex flex-col justify-evenly  text-left mt-[25px]'>
            <h1 className='text-[24px] m-[25px]'><strong>{`Բիզնես էջեր >`} </strong></h1>
            <BodyBP buisnessPages={dataBase.buisnessPages} />

            {/* <h1 className='text-[24px] m-[25px]'><strong>{`Գնել առաքումով >`} </strong></h1>
            <BodyDelevery delevery={dataBase.delevery} /> */}
        </div>
    )
}

export default Body