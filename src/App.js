import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import SignUp from "./components/SignUp";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
function App() {
  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
