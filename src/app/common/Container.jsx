import React from 'react'
import { cn } from "../../classReplacer/replacer";

function Container({children, className}) {
  return (
    <div className={cn('max-w-[1550px] overflow-hidden ', className)}>
        {
            children
        }
    </div>
  )
}

export default Container