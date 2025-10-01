import React from 'react'
import { cn } from "../../classReplacer/replacer";

function Container({children, className}) {
  return (
    <div className={cn('max-w-[1400px] ', className)}>
        {
            children
        }
    </div>
  )
}

export default Container