import LoginBody from "./LoginBody";
import LoginFooter from "./LoginFooter";
import Header from "../Header";
import { loginHeader } from "../Header";

const Login = () => {
  const LoginHeader = loginHeader(Header);
  return (
    <div>
      <LoginHeader />
      <LoginBody />
      <LoginFooter />
    </div>
  );
};

export default Login;
