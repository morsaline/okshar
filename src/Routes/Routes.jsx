import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import SingleProductDetails from "../Pages/SingleProductDetails/SingleProductDetails";
import JobCircular from "../Pages/JobCircular/JobCircular";
// import AllNews from "../Pages/NewsBd/AllNews/AllNews";
import BcsCategory from "../Pages/BcsCategory/BcsCategory";
// import SingleNewsDetails from "../Pages/Home/News/SingleNewsDetails/SingleNewsDetails";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import SingleNewsDetails from "../Pages/NewsBd/SingleNewsDetails/SingleNewsDetails";
import AllNews from "../Pages/NewsBd/AllNews/AllNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/jobcircular",
        element: <JobCircular />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products/:_id",
        element: <SingleProductDetails />,
      },
      {
        path: "/allnews/:category",
        element: <AllNews />,
      },
      {
        path: "/bcs/:category",
        element: <BcsCategory />,
      },
      {
        path: "/news/:_id",
        element: <SingleNewsDetails />,
      },
      {
        path: "jobcircular/news/:_id",
        element: <SingleNewsDetails />,
      },
    ],
  },
]);

export default router;
