import * as I from "../../icons/index";
import "./index.css";

export default function Header() {
  return (
    <div className="container">
      <div className="button">
        <I.Hamburger />
      </div>
      <div className="subject">New chat</div>
      <div className="button">
        <I.Plus />
      </div>
    </div>
  );
}
