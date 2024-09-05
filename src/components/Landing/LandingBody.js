import { LANDINGIMG_URL } from "../../constants/constants";
import { Link } from "react-router-dom";
const LandingBody = () => {
  return (
    <main className="relative">
      <img
        src={LANDINGIMG_URL}
        alt="Landing Body Image"
        className="bg-gradient-to-t from-black w-lvw"
      />
      <div
        className="absolute
                top-0
                left-0
                w-full
                h-full
                bg-gradient-to-t from-black
                "
      ></div>
      <div
        className="absolute
                top-0
                left-0
                w-full
                h-1/3
                bg-gradient-to-b from-black
                "
      ></div>
      <div className="absolute z-50 w-2/5 top-1/3 left-0 right-0 mx-auto">
        <div>
          <p className="text-white text-6xl w-full text-center leading-normal font-extrabold ">
            Unlimited movies, TV shows and more
          </p>
        </div>
        <div className="mb-4">
          <p className="text-white w-full text-center p-3 font-bold text-xl">
            Starts at ₹149. Cancel anytime.
          </p>
        </div>
        <div className="text-center w-full">
          <Link
            to="/signup"
            className="px-6 py-2 text-white text-3xl bg-red-600 font-bold rounded-sm"
          >
            Get Started.
          </Link>
        </div>
      </div>
    </main>
  );
};
export default LandingBody;
