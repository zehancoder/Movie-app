import React from "react";
import { cn } from "../../classReplacer/replacer";

function Heading({children, className}) {
  return (
    <h1 className={cn("md:text-3xl text-2xl lg:text-[38px] font-bold text-white", className)}>
      {children}
    </h1>
  );
}

export default Heading;
