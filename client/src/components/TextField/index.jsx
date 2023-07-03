import { useRef, useState } from "react";
import { SendIcon } from "../../icons";
import "./index.css";

const TextField = ({ sendChat }) => {
  const inputRef = useRef(null);
  return (
    <div className="text-field">
      <input ref={inputRef} />
      <SendIcon
        onClick={() => {
          sendChat(inputRef.current.value);
          inputRef.current.value = "";
        }}
      />
    </div>
  );
};

export default TextField;
