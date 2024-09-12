import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Header = ({ children }) => {
  return (
    <header className="absolute w-full z-20 flex items-center mt-4 justify-between">
      <img src={logo} alt="logo" className="w-80 pl-32" />
      {children}
    </header>
  );
};

export default Header;

export const loginHeader = (Header) => {
  return () => {
    return <Header />;
  };
};

export const landingHeader = (Header) => {
  return () => {
    return (
      <Header>
        <div className="flex pr-40">
          <button className="text-white px-7  border-[1px] border-solid border-slate-300 rounded-sm mr-4 ">
            English
          </button>
          <Link
            to="/login"
            className="text-white bg-red-600 px-4 py-1 rounded-sm text-md font-medium"
          >
            Sign In
          </Link>
        </div>
      </Header>
    );
  };
};
