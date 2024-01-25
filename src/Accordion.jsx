import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          key={el.title}
          num={i < 9 ? `0${i + 1}` : i + 1}
          title={el.title}
          text={el.text}
        />
      ))}
    </div>
  );
}
