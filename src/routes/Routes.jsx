import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/Home/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path:"/login",
            element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/services",
          element: <Services/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/services",
          element: <Services/>
        },

      ],
    },
  ]);
  
export default router