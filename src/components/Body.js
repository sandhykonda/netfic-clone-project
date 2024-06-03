import React from "react";

import Browse from "./Browse";
import Login from "./Login";
import SearchMovieInfo from "./SearchMovieInfo"
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomeMovieInfo from "./HomeMovieInfo";
import WatchMovie from "./WatchMovie";
import FavoriteList from "./FavoriteList";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/details",
      element: <SearchMovieInfo />,
    },
    {
      path: "/favorites",
      element: <FavoriteList />,
    },
    {
      path: "/homedetails",
      element: <HomeMovieInfo />,
    },
    {
      path: "/watchVideo",
      element: <WatchMovie />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
