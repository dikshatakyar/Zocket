import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAdCampaign from "./Components/CreateAdCampaign";
import Body from "./Components/Body";

const App = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/new",
        element: <CreateAdCampaign />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
