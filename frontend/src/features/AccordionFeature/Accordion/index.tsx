import type { AccordionContextType } from "../Context/AccordionContext";
import AccordionContextProvider from "../Context/AccordionContextProvider";

export type AccordionPropType = React.HTMLAttributes<HTMLUListElement> & {
  children: React.ReactNode;
  expand: AccordionContextType["expand"];
};

const Accordion: React.FC<AccordionPropType> = ({ children, expand, ...props }) => {
  return (
    <AccordionContextProvider expand={expand}>
      <ul {...props}>{children}</ul>
    </AccordionContextProvider>
  );
};

export default Accordion;
