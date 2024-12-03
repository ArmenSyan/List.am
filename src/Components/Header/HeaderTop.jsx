import React from 'react'

function HeaderTop() {
    return (
        <div className='HeaderTop flex justify-evenly items-center mt-[15px]'>
            <div className='flex justify-evenly w-[300px]'>
                <strong><h1 className='text-[42px]'>list</h1></strong>
                <div className='flex justify-evenly items-center w-[150px]'>
                <i class="fa fa-bars"></i>
                <p className='text-[20px]'>Բաժիններ</p>
                </div>
            </div>
            <div className='flex justify-center'>
            <input 
            type='text' 
            placeholder='Որոնում'
            className='w-[520px] h-[50px] bg-[#f6f6f6] rounded-[10px] pl-[16px] pr-[12px] border-none'
            />
            </div>
            <div className='flex justify-evenly items-center w-[350px]'>
                <p>Իմ էջը</p>
                <button className='bg-[#0090ff] rounded-[20px] w-[257px] h-[37px] text-white'>Տեղադրել հայտարարություն</button>
            </div>
        </div>
    )
}

export default HeaderTop