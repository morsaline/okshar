import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import SingleProductDetails from "../Pages/SingleProductDetails/SingleProductDetails";
import JobCircular from "../Pages/JobCircular/JobCircular";
import BcsCategory from "../Pages/BcsCategory/BcsCategory";
import SingleNewsDetails from "../Pages/NewsBd/SingleNewsDetails/SingleNewsDetails";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import AllNews from "../Pages/NewsBd/AllNews/AllNews";

import SingleVideoNews from "../Pages/NewsBd/VideosNews/SingleVideoNews/SingleVideoNews";
import AllVideosNews from "../Pages/NewsBd/VideosNews/AllVideosNews/AllVideosNews";

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
        path: "/AllVideosNews",
        element: <AllVideosNews />,
      },
      {
        path: "/products/:_id",
        element: <SingleProductDetails />,
      },
      {
        path: "/videosNews/:_id",
        element: <SingleVideoNews />,
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
        path: "/:category/:_id",
        element: <SingleNewsDetails />,
      },
    ],
  },
]);

export default router;
