import { useMemo } from "react";
import { create, all } from "mathjs";

export default function Buttons({ numButtons, setCalc, calc, setResult }) {
  const memoizedNumButtons = useMemo(() => numButtons, [numButtons]);
  const ops = ["/", "*", "+", "-"];
  const math = create(all);
  const handleInputNumber = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };

  const handleResult = () => {
    try {
      setResult(math.evaluate(calc).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  const handleClearInput = () => {
    setCalc("");
    setResult("");
  };
  const handleDelete = () => {
    setCalc(calc.slice(0, -1));
  };
  const buttonStyle = (id) => {
    switch (id) {
      case "=":
        return "bg-[#a160fb] text-white rounded hover:bg-[#4c08ab]";
        break;
      case "delete":
      case "%":
      case "clear":
      case "/":
      case "+":
      case "*":
      case "-":
        return "font-normal border-none rounded button-hover";
        break;
      default:
        return "font-black text-[#4c4c4c] border-none rounded button-hover";
    }
  };
  return (
    <div
      className="grid grid-cols-4 gap-4 pt-6 mx-5 mt-2 md:h-80 
      mobile-one:h-96"
    >
      {memoizedNumButtons.map((numButton) => (
        <button
          key={numButton.id}
          id={numButton.id}
          className={buttonStyle(numButton.id)}
          onClick={() => {
            switch (numButton.id) {
              case "=":
                handleResult();
                break;
              case "delete":
                handleDelete();
                break;
              case "clear":
                handleClearInput();
                break;
              default:
                handleInputNumber(numButton.id);
            }
          }}
        >
          {numButton.symbol}
        </button>
      ))}
    </div>
  );
}
