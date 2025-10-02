import React from "react";
import { cn } from "../../classReplacer/replacer";

function ParagraphText({ children, className }) {
  return (
    <p className={cn("md:text-[17px] text-[15px] lg:text-[19px] font-normal text-[#999] ", className)}>
      {children}
    </p>
  );
}

export default ParagraphText;
