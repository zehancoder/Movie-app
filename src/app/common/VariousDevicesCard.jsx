import React from 'react'

function VariousDevicesCard({deviceImg, drescription, device}) {


  return (
    <div  className='md:px-4 px-2 shadowDevices cursor-pointer devicesAnimation lg:px-6 md:py-8 py-6 lg:py-12 customGradientColor lg:max-w-[440px] md:max-w-[340px] w-full m-2 xl:max-w-[470px] border border-[#1F1F1F] rounded-lg hover:scale-105 transition duration-200 ' >
        <div>
            <div className='flex items-center md:gap-3 gap-2 lg:gap-4'>
                <div className='px-2 py-2 bg-[#141414] rounded-lg border border-[#1F1F1F]'>
                    <img src={deviceImg} alt="" />
                </div>
                <h1 className='text-white font-semibold font-manrope text-[20px]'>{device}</h1>
            </div>
            <p className='mt-8 text-[#999999] text-[14px] md:text-[16.5px]'>{drescription}</p>
        </div>
    </div>
  )
}

export default VariousDevicesCard