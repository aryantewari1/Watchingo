import logo from "../images/logo.png";
const Header = () => {
  return (
    <div>
      <img src={logo} alt="logo" className="w-80 pl-32" />
    </div>
  );
};

export default Header;

export const loginHeader = (Header) => {
  return () => {
    return (
      <div className="absolute w-full z-20 flex items-center mt-4 justify-between">
        <Header />
      </div>
    );
  };
};
