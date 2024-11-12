import logo from ".././images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { checkValidData } from "../utils/validate";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../store/Slices/userSlice";
import { LOGO_URL } from "../constants/constants";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const firstName = useRef(null);
  const secondName = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  function isValid() {
    const valid = checkValidData(
      emailRef.current.value,
      passwordRef.current.value
    );
    setErrorMessage(valid);
    if (valid) return;

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: firstName.current.value + " " + secondName.current.value,
          photoURL: LOGO_URL,
        })
          .then(() => {
            dispatch(
              addUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            );
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(error.message);
      });
  }
  return (
    <>
      <header className="flex justify-between items-center">
        <div>
          <img src={logo} className="w-80 pl-32 pt-3" />
        </div>
        <div>
          <Link
            to="/login"
            className="mr-44 bg-red-600 px-4 py-1 text-white rounded-sm font-medium "
          >
            Sign in
          </Link>
        </div>
      </header>
      <main>
        <div className="absolute top-0 right-0 left-0 mt-44 bg-black bg-opacity-65 w-4/12  mx-auto px-16 py-12">
          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-8">
              <header className="text-white text-3xl font-bold">Sign Up</header>
            </div>
            <div>
              <div className="mb-4 flex justify-between">
                <input
                  type="text"
                  ref={firstName}
                  placeholder="First Name"
                  className="py-2 pl-3 w-1/2 mr-4 bg-inherit border-solid border-gray-400 border-[1px] rounded-md text-white"
                />
                <input
                  type="text"
                  ref={secondName}
                  placeholder="Last Name"
                  className="py-2 pl-3 w-1/2 bg-inherit border-solid border-gray-400 border-[1px] rounded-md text-white"
                />
              </div>
              <div className="mb-4 ">
                <input
                  type="text"
                  placeholder="Email or mobile number"
                  className="w-full pl-4 py-4 bg-inherit border-solid border-gray-400 border-[1px] rounded-md text-white"
                  ref={emailRef}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  className="w-full pl-4 py-4 bg-inherit border-solid border-gray-400 border-[1px] rounded-md text-white "
                />
              </div>
              <div className="w-full">
                {errorMessage && (
                  <p className="text-red-600 text-sm font-semibold mb-4">
                    {errorMessage}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4 mt-4">
              <button
                className="w-full inline-block text-center text-white  bg-red-600 py-2 font-semibold rounded-sm mb-4 "
                onClick={isValid}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignUp;
