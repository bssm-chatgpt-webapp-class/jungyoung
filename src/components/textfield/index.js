import "./index.css";
import { useRef } from "react";

export default function Textfield(props) {
  const input = useRef();
  return (
    <div className="textfield">
      <input className="textinput" type="text" ref={input} />
      <button
        className="sendbutton"
        onClick={() => {
          props.setQuestion(input.current.value);
        }}
      ></button>
    </div>
  );
}
