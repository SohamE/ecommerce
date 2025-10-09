import { useAccordionContext } from "../hooks/useAccordionContext";

type AccordionItemPropType = React.HTMLAttributes<HTMLLIElement> & {
  children: React.ReactNode;
  title: string;
  id: string
};

const AccordionItem: React.FC<AccordionItemPropType> = ({
  children,
  title,
  id
}) => {
  const { expand, expandAccordion } = useAccordionContext();
  return (
    <li>
      <h3 onClick={() => expandAccordion(id)}>{title}</h3>
      <div className="description" hidden={expand != id}>
        {children}
      </div>
    </li>
  );
};

export default AccordionItem;
