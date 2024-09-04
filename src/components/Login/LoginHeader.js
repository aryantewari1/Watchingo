import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <div className="absolute w-full z-20 flex items-center mt-4 justify-between">
      <div>
        <img src={logo} alt="logo" className="w-80 pl-32" />
      </div>
    </div>
  );
};
export default LoginHeader;
