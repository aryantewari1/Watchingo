import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import SignUp from "./components/SignUp";
import App from "./App";
import Browse from "./components/Browser/Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/browse", element: <Browse /> },
    ],
  },
]);

export default appRouter;
