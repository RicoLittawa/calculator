import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Answer({ calc, result, setCalc }) {
  const displayValue = calc || "0";
  return (
    <section
      id="display"
      className="bg-[#121212] rounded-b-xl overflow-hidden
      md:h-64
      mobile-one:h-72 
      mobile-two:h-56
      mobile-three:h-64
      mobile-four:h-72
      mobile-five:h-80
      "
    >
      <h2
        className="text-[#9c5df3] text-right font-bold md:pr-7 md:mt-28
      mobile-one:pr-3 mobile-one:mt-36
      mobile-two:mt-24
      mobile-three:mt-32
      mobile-four:mt-32
      mobile-five:mt-44"
      >
        {displayValue}
      </h2>
      <h1
        className="font-extrabold text-right text-white md:pr-7 
      mobile-one:pr-3"
      >
        {!result ? "" : "=" + result}
      </h1>
    </section>
  );
}
