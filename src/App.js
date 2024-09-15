import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./store/Slices/userSlice";

function App() {
  const dispatch = useDispatch();
  const isSignedUp = useSelector((state) => state.user.isSignUp);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && isSignedUp) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [isSignedUp]);
  return (
    <div className="">
      <Outlet />
    </div>
  );
}

export default App;
