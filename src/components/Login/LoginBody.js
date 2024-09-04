import { LOGINIMG_URL } from "../../constants/constants";
const LoginBody = () => {
  return (
    <div className="relative">
      <img
        src={LOGINIMG_URL}
        alt="Landing Body Image"
        className="bg-gradient-to-t from-black w-full h-screen object-cover"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-60"></div>
    </div>
  );
};
export default LoginBody;
