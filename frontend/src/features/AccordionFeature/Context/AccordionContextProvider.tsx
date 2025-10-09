import { useState } from "react";
import {
  AccordionContext,
  type AccordionContextType,
} from "./AccordionContext";

const AccordionContextProvider = ({
  children,
  expand: expandAcc,
}: {
  children: React.ReactNode;
  expand: AccordionContextType["expand"];
}) => {
  const [expand, setExpand] = useState(expandAcc);
  const expandAccordion = (expand: AccordionContextType["expand"]) => {
    setExpand(expand);
  };
  return (
    <AccordionContext.Provider value={{ expand, expandAccordion }}>
      {children}
    </AccordionContext.Provider>
  );
};

export default AccordionContextProvider;
