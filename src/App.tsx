import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import Aos from "aos";

import "aos/dist/aos.css";

import { router } from "./Router.js";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
