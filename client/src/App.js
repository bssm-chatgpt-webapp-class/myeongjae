import { useEffect, useState } from "react";
import { Header, TextField } from "./components";
import { Main } from "./components";
import { io } from "socket.io-client";

const socket = io("http://localhost:5050");

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  const [question, setQuestion] = useState("");

  useEffect(() => {
    socket.on("chat", (message) => {
      setChatMessages((prev) => [...prev, { isMine: false, message }]);
    });
  }, []);

  const sendChat = (message) => {
    setChatMessages((prev) => [...prev, { isMine: true, message }]);
    socket.emit("chat", message);
  };

  return (
    <div>
      <Header />
      <Main chatMessages={chatMessages} />
      <TextField sendChat={sendChat} />
    </div>
  );
}

export default App;
