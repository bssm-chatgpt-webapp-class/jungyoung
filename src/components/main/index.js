import "./index.css";
import * as C from "../index";

export default function Main(props) {
  return (
    <div className="maincontainer">
      <C.Chatitem
        text={props.question}
        imglink="data:image/jpeg;base64,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"
      />
      <C.Chatitem text="코딩 잘하는 법" imglink="/images/GPT.svg" />
    </div>
  );
}
