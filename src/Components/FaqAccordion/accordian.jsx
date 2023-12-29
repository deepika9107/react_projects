import { useState } from "react";
import "./css/style.css";
import minus_icon from "../Assets/icon-minus.svg";
import plus_icon from "../Assets/icon-plus.svg";

const Accordian = ({ question, answer }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <dt
        onClick={() => {
          setActive(!active);
        }}
      >
        <span>{question}</span>

        <img src={active ? minus_icon : plus_icon} alt=""></img>
      </dt>
      {active && <dd>{answer}</dd>}
      <hr></hr>
    </>
  );
};

export default Accordian;
