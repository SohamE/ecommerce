import { createContext } from "react";

export type AccordionContextType = {
  expand: string;
  expandAccordion: (expand: string) => void;
};

export const AccordionContext = createContext<AccordionContextType | null>(
  null
);
