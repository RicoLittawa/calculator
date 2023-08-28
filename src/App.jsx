import "./App.css";
import Answer from "./Answer";
import Buttons from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEquals,
  faPlus,
  faMinus,
  faDivide,
  faXmark,
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const numButtons = [
  {
    id: "%",
    symbol: "%",
  },
  {
    id: "delete",
    symbol: "DEL",
  },
  {
    id: "clear",
    symbol: "AC",
  },
  {
    id: "/",
    symbol: <FontAwesomeIcon icon={faDivide} />,
  },
  {
    id: "7",
    symbol: 7,
  },
  {
    id: "8",
    symbol: 8,
  },
  {
    id: "9",
    symbol: 9,
  },
  {
    id: "*",
    symbol: <FontAwesomeIcon icon={faXmark} />,
  },
  {
    id: "4",
    symbol: 4,
  },
  {
    id: "5",
    symbol: 5,
  },
  {
    id: "6",
    symbol: 6,
  },
  {
    id: "-",
    symbol: <FontAwesomeIcon icon={faMinus} />,
  },
  {
    id: "1",
    symbol: 1,
  },
  {
    id: "2",
    symbol: 2,
  },
  {
    id: "3",
    symbol: 3,
  },
  {
    id: "+",
    symbol: <FontAwesomeIcon icon={faPlus} />,
  },
  {
    id: "",
    symbol: "",
  },
  {
    id: "0",
    symbol: 0,
  },
  {
    id: ".",
    symbol: ".",
  },
  {
    id: "=",
    symbol: <FontAwesomeIcon icon={faEquals} />,
    class: "w-100",
  },
];
export default function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  return (
    <section
      id="calc-body"
      className="md:block items-center justify-center md:w-96 h-screen md:border-solid md:border-2 md:border-[#121212] w-screen"
    >
      <div>
        <Answer calc={calc} result={result} setCalc={setCalc} />
      </div>
      <Buttons
        numButtons={numButtons}
        setCalc={setCalc}
        calc={calc}
        setResult={setResult}
      />
    </section>
  );
}
