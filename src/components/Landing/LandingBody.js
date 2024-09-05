import { LANDINGIMG_URL } from "../../constants/constants";
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
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
};
export default LandingBody;
