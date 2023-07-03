import "./index.css";

const ChatItem = ({ imageLink, text }) => {
  return (
    <div className="question">
      <img className="question-profile" src={imageLink} alt="img" />
      <div>{text}</div>
    </div>
  );
};

export default ChatItem;
