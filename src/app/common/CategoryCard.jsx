import React from 'react'
import jsonData from "../../data/carouselData.json"
function CategoryCard({text, img1, img2, img3, img4}) {
  return (
    <div className='m-3 cursor-pointer  border border-[#383838] rounded-xl'>
        <div className='md:p-7 p-4 lg:p-10   '>
            <div className=''>
              <div className='flex items-center justify-center brightness-75 gap-4'>
                <img className='xl:w-[100px] lg:w-[80px] md:w-[80px] md:h-[100px] w-[60px] h-[80px] rounded-lg   lg:h-[100px] xl:h-[120px] object-cover' src={img1} alt="" />
                <img className='xl:w-[100px] lg:w-[80px] md:w-[80px] md:h-[100px] w-[60px] h-[80px]  rounded-lg  lg:h-[100px] xl:h-[120px] object-cover' src={img2} alt="" />
                
              </div>
              <div className='flex mt-2 items-center  justify-center brightness-75 gap-4'>
                <img className='xl:w-[100px] lg:w-[80px] md:w-[80px] md:h-[100px] w-[60px] h-[80px]  rounded-lg  lg:h-[100px] xl:h-[120px] object-cover' src={img3} alt="" />
                <img className='xl:w-[100px] lg:w-[80px] md:w-[80px] md:h-[100px] w-[60px] h-[80px]  rounded-lg  lg:h-[100px] xl:h-[120px] object-cover' src={img4} alt="" />
              </div>
              
            </div>
            <p className='text-center mt-10 text-white font-medium md:text-[17px] text-[15px] lg:text-xl'>{text}</p>
        </div>
    </div>
  )
}

export default CategoryCard