const AccordionItem = ({
  activeIndex,
  index,
  onAccordionClick,
  num,
  title,
  children,
}) => {
  const isOpen = index === activeIndex;
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => onAccordionClick(index)}
    >
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};
export default AccordionItem;
