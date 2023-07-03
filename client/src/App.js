import { useState } from "react";
import { Header, TextField } from "./components";
import { Main } from "./components";

function App() {
  const [question, setQuestion] = useState("");
  console.log(question);

  return (
    <div>
      <Header />
      <Main question={question} />
      <TextField setQuestion={setQuestion} />
    </div>
  );
}

export default App;
