import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
const Browse = () => {
  const navigate = useNavigate();
  function signUserOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div>
      <button onClick={signUserOut}>Sign Out</button>
    </div>
  );
};

export default Browse;
