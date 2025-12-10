import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import Hero from "./components/hero";
import Team from "./components/team";
import Feature from "./components/feature";

const router = createBrowserRouter([
  {
    path: "/",          
    element: <App />,
    children: [
      {
        index: true,    
        element: <Hero />
      },
      {
        path: "team",   
        element: <Team />
      },
      {
        path: "feature", 
        element: <Feature />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
