import "./index.css";

const ChatItem = ({ imageLink, text }) => {
  return (
    <div className="chat-item">
      <img className="user-profile" src={imageLink} alt="img" />
      <pre>{text}</pre>
    </div>
  );
};

export default ChatItem;
