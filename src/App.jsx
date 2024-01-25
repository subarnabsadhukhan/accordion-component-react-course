import Accordion from "./Accordion";
import { faqs } from "./faqs";

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
