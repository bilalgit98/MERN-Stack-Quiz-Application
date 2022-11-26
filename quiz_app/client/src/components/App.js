import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main";
import Quiz from "./Quiz";
import Results from "./Results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: <Quiz></Quiz>,
  },
  {
    path: "/result",
    element: <Results></Results>,
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
