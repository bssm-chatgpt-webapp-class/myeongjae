import { chatgptResponse, profileImage } from "../../fixtures";
import ChatItem from "../ChatItem";
import "./index.css";

const Main = ({ question }) => {
  return (
    <div className="main">
      <ChatItem imageLink={profileImage} text="asdfasdfasdf" />
      <ChatItem imageLink="/images/chatGPT.png" text={chatgptResponse} />
      <ChatItem imageLink={profileImage} text="asdfasdfasdf" />
      <ChatItem imageLink="/images/chatGPT.png" text={chatgptResponse} />
      <ChatItem imageLink={profileImage} text="asdfasdfasdf" />
      <ChatItem imageLink="/images/chatGPT.png" text={chatgptResponse} />
      <ChatItem imageLink={profileImage} text="asdfasdfasdf" />
      <ChatItem imageLink="/images/chatGPT.png" text={chatgptResponse} />
      <ChatItem imageLink={profileImage} text="asdfasdfasdf" />
      <ChatItem imageLink="/images/chatGPT.png" text={chatgptResponse} />
      <ChatItem imageLink={profileImage} text="asdfasdfasdf" />
      <ChatItem imageLink="/images/chatGPT.png" text={chatgptResponse} />
    </div>
  );
};

export default Main;
