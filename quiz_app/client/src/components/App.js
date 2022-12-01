import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main";
import Quiz from "./Quiz";
import Results from "./Results";
import { CheckUser } from "../helper/helper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: (
      <CheckUser>
        <Quiz />
      </CheckUser>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUser>
        <Results />
      </CheckUser>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
