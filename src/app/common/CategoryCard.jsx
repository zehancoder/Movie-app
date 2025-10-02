import React from 'react'

function CategoryCard({text}) {
  return (
    <div className='m-3  border border-[#383838] rounded-xl'>
        <div className='md:p-7 p-4 lg:p-10   '>
            <img className='md:w-auto w-[200px] mx-auto' src="/images/logoImg.png" alt="" />
            <p className='text-center mt-10 text-white font-medium md:text-[17px] text-[15px] lg:text-xl'>{text}</p>
        </div>
    </div>
  )
}

export default CategoryCard