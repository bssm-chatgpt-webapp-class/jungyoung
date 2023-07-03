import * as I from "../../icons/index";
import "./index.css";

export default function Header() {
  return (
    <div className="headercontainer">
      <div className="headerbutton">
        <I.Hamburger />
      </div>
      <div className="subject">New chat</div>
      <div className="headerbutton">
        <I.Plus />
      </div>
    </div>
  );
}
