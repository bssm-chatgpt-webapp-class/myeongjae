import { profileImage } from "../../fixtures";
import ChatItem from "../ChatItem";
import "./index.css";

const Main = ({ chatMessages, question }) => {
  return (
    <div className="main">
      {chatMessages.map((item, idx) => (
        <ChatItem
          key={idx}
          imageLink={item.isMine ? profileImage : "/images/chatGPT.png"}
          text={item.message}
        />
      ))}
    </div>
  );
};

export default Main;
