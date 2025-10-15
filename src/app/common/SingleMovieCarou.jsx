import React from 'react'

function SingleMovieCarou({text, randomItem}) {
  return (
    <div className='px-3 py-3 bg-[#1A1A1A] w-full'>
        <div>
            <div className='w-full rounded-md overflow-hidden'>
                <img className='w-full' src={img} alt="" />
            </div>
            <div className='flex items-center justify-between'>
                <p>{text}</p>
                <div>
                    {randomItem}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleMovieCarou