import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { PageLogin } from "./pages/PageLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PageLogin />,
      },
    ],
  },
]);

export default router;
