import React from 'react'
import { cn } from '../../classReplacer/replacer'

function Button({children, className}) {
  return (
    <button className={cn('md:px-4  customBtnHoverEffect font-manrope px-2 py-2 md:py-3 -tracking-[0.2px] lg:-tracking-[0.4px] rounded-lg  cursor-pointer md:text-[15px] text-[14px] lg:text-[17px] font-normal text-white', className)}>
        {
            children
        }
    </button>
  )
}

export default Button