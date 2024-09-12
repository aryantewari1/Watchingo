import LandingBody from "./LandingBody";
import LandingFooter from "./LandingFooter";
import Header from "../Header";
import { landingHeader } from "../Header";

const Landing = () => {
  const LandingHeader = landingHeader(Header);
  return (
    <div>
      <LandingHeader />
      <LandingBody />
      <LandingFooter />
    </div>
  );
};

export default Landing;
