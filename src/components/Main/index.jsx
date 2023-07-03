import { profileImage } from "../../fixtures";
import ChatItem from "../ChatItem";
import "./index.css";

const Main = () => {
  return (
    <div className="main">
      <ChatItem imageLink={profileImage} text="asdfasdfasdf" />
    </div>
  );
};

export default Main;
