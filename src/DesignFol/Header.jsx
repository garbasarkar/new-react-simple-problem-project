import "../../src/index.css";
import profile from "../images/profile.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 mx-4 border-b-2">
      <h4 className="text-3xl font-semibold">Knowledge Cafe</h4>
      <img src={profile}></img>
    </div>
  );
};

export default Header;
