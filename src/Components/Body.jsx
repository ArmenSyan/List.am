import React from 'react'
import BodyBP from './Body/BodyBP'
import BodyDelevery from './Body/BodyDelevery'
import BodyCars from './Body/BodyCars'
import BodyProperty from './Body/BodyProperty'
import BodyPhones from './Body/BodyPhones'

function Body({ dataBase }) {
    return (
        <div className='flex flex-col justify-evenly  text-left mt-[25px] font-sans '>
            <h1 className='text-[24px] m-[25px] text-[#1A1D3E]'><strong>{`Բիզնես էջեր >`} </strong></h1>
            <BodyBP buisnessPages={dataBase.buisnessPages} />

            <h1 className='text-[24px] m-[25px] text-[#1A1D3E]'><strong>{`Գնել առաքումով >`} </strong></h1>
            <BodyDelevery delevery={dataBase.delevery} />

            <h1 className='text-[24px] m-[25px] text-[#1A1D3E]'><strong>{`Ավտոմեքենաներ >`} </strong></h1>
            <BodyCars cars={dataBase.cars} />

            <h1 className='text-[24px] m-[25px] text-[#1A1D3E]'><strong>{`Կոմերցիոն անշարժ գույքի և գրասենյակների վարձակալություն >`} </strong></h1>
            <BodyProperty property={dataBase.property} />

            <h1 className='text-[24px] m-[25px] text-[#1A1D3E]'><strong>{`Էլեկտրոնիկա >`} </strong></h1>
            <BodyPhones phones={dataBase.phones} /> 
        </div>
    )
}

export default Body