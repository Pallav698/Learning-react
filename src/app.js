import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/RestaurantMenu";
import UserContext from "./Utils/UserContext";
import { useEffect } from "react";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    const [userName, setUserName] =  useState();

    useEffect(() => {
        const data = {
            name: "Pallav"
        }
        setUserName(data.name);
    },[]);
    return (
      <UserContext.Provider value={{loggedinUser : userName, setUserName}}>
        <div className="app">
          <Header />
          <Outlet></Outlet>
        </div>
      </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path:"/",
                element:<Body></Body>
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurants/:resId",
                element: <ResturantMenu />
            },
            {
                path:"/grocery",
                element:<Suspense fallback = {<h1>Loading Your Groceries</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement: <Error/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);