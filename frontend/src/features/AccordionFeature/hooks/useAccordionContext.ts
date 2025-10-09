import { useContext } from "react"
import { AccordionContext } from "../Context/AccordionContext";

export const useAccordionContext = () => {
  const data = useContext(AccordionContext);
  if (!data) throw Error("Outside accordion context");
  return data;
}