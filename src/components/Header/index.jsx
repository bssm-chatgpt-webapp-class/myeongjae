import { Hambug } from "../../icons";
import { PlusIcon } from "../../icons/";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <Hambug />
      <div>New Chat</div>
      <PlusIcon />
    </div>
  );
};

export default Header;
