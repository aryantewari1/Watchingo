import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import SignUp from "./components/SignUp";
import App from "./App";
import Browse from "./components/Browser/Browse";
import BrowseHome from "./components/Browser/BrowseHome/BrowseHome";
import BrowseProtectedRoute from "./components/BrowseProtectedRoute";
import GeneralProtectedRoute from "./components/GeneralProtectedRoute";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <GeneralProtectedRoute>
            <Landing />{" "}
          </GeneralProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <GeneralProtectedRoute>
            {" "}
            <Login />
          </GeneralProtectedRoute>
        ),
      },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/browse",
        element: (
          <BrowseProtectedRoute>
            {" "}
            <Browse />{" "}
          </BrowseProtectedRoute>
        ),
        children: [
          {
            path: "",
            element: <BrowseHome />,
          },
        ],
      },
    ],
  },
]);

export default appRouter;
