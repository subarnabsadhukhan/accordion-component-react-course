import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      return setActiveIndex(null);
    }
    setActiveIndex(index);
  };
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          key={el.title}
          num={i < 9 ? `0${i + 1}` : i + 1}
          title={el.title}
          activeIndex={activeIndex}
          index={i}
          onAccordionClick={handleAccordionClick}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}
