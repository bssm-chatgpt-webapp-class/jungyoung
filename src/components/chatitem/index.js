import "./index.css";

export default function Chatitem(props) {
  return (
    <div className="question">
      <img className="image" alt="" src={props.imglink}></img>
      <pre className="chat">{props.text}</pre>
    </div>
  );
}
