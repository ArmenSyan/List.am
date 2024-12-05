import React from 'react'

function Footer() {
    return (
        <div className='flex justify-evenly w-[1500px] bg-[#F6F6F7] p-[10px]'>
            <div>
                <p className='text-[#1A1D3C] text-[12px]'>© 2005-2024 List.am</p>
            </div>
            <div className='flex w-350px'>
                <p className='text-[#1A1D3C] text-[12px] pl-[16px]'>Տեղեկանք</p>
                <p className='text-[#1A1D3C] text-[12px] pl-[16px]'>Հետադարձ կապ</p>
                <p className='text-[#1A1D3C] text-[12px] pl-[16px]'>Օգտագործման համաձայնագիր</p>

            </div>
        </div>
    )
}

export default Footer