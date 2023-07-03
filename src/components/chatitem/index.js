import "./index.css";

export default function Chatitem(props) {
  return (
    <div className="question">
      <img className="image" alt="" src={props.imglink}></img>
      <div className="text">{props.text}</div>
    </div>
  );
}
