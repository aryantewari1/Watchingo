import { useState } from "react";
import { LOGINIMG_URL } from "../../constants/constants";
import { Link } from "react-router-dom";
const LoginBody = () => {
  const [showLearnMore, setShowLearnMore] = useState(false);

  function handleLearnMore() {
    setShowLearnMore(true);
  }
  return (
    <div className="relative">
      <img
        src={LOGINIMG_URL}
        alt="Landing Body Image"
        className="bg-gradient-to-t from-black w-full h-screen object-cover"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-60"></div>
      <div className="absolute top-0 right-0 left-0 mt-28  bg-black bg-opacity-65 w-4/12 h-full mx-auto px-16 py-12">
        <form className="w-11/12">
          <div className="mb-8">
            <header className="text-white text-3xl font-bold">Sign In</header>
          </div>
          <div>
            <div className="mb-4 ">
              <input
                type="text"
                placeholder="Email or mobile number"
                className="w-full pl-4 py-4 bg-inherit border-solid border-gray-400 border-[1px] rounded-md text-white"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-4 py-4 bg-inherit border-solid border-gray-400 border-[1px] rounded-md text-white "
              />
            </div>
          </div>
          <div className="mb-4">
            <button className="text-white w-full bg-red-600 py-2 font-semibold rounded-sm mb-4">
              Sign In
            </button>
            <p className="p-2 text-center text-gray-300 mb-4">OR</p>
            <Link
              to="/"
              className="w-full inline-block text-center text-white  bg-red-600 py-2 font-semibold rounded-sm mb-4 "
            >
              {" "}
              Sign Up{" "}
            </Link>

            <Link className="inline-block w-full text-center text-white">
              {" "}
              Forgot password?{" "}
            </Link>
          </div>
          <footer>
            <div className="mb-6">
              <p className="inline-block text-gray-300">New to Netflix?</p>
              <Link to="/" className="text-white font-semibold hover:underline">
                {" "}
                Sign up now.
              </Link>
            </div>
            <div className="mb-4">
              <p className="text-gray-400 text-sm inline-block">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
                {!showLearnMore && (
                  <button
                    className="text-blue-700 text-sm hover:underline"
                    onClick={handleLearnMore}
                  >
                    Learn More.
                  </button>
                )}
              </p>
            </div>
            {showLearnMore && (
              <p className="text-gray-400 text-sm ">
                The information collected by Google reCAPTCHA is subject to the
                Google Privacy Policy and Terms of Service, and is used for
                providing, maintaining, and improving the reCAPTCHA service and
                for general security purposes (it is not used for personalised
                advertising by Google).
              </p>
            )}
          </footer>
        </form>
      </div>
    </div>
  );
};
export default LoginBody;
