import Accordion from "../../features/AccordionFeature/Accordion";
import AccordionItem from "../../features/AccordionFeature/AccordionItem";

const Home = () => {
  return (
    <div>
      <Accordion className="accordion-container" expand="acc_c">
        <AccordionItem title="A" id="acc_a">
          Test A
        </AccordionItem>
        <AccordionItem title="B" id="acc_b">
          Test B
        </AccordionItem>
        <AccordionItem title="C" id="acc_c">
          Test C
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Home;
