import * as C from "./components/index";
import "./reset.css";

import { useState } from "react";

function App() {

  const [question, setQuestion] = useState();
  return (
    <>
      <C.Header />
      <C.Main question={question} />
      <C.Textfield setQuestion={setQuestion} />
    </>
  );
}

export default App;
