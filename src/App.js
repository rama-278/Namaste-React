// Creating my food app
// Header
// --> logo 
// --> nav - items 
// Body
// * search 
//  * Restaurant Container
//         * Restaurant cards 
//                 * Image
//                 *Name of res, star rating, delivery time,cuisine
                
// Footer 
// * copyrights
// * links 
// * addresses
// *contact 

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>
          
        </div>
    )
};

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
          errorElement: <Error />,
        children:[
          {
                path: "/",  
                element: <Body/>,
            },
             {
        path: "/about",
        element:<About/>,
    },
      {
        path: "/contact",
        element:<Contact/>,
            },
            {
                path: "/restaurants/:resId",
                element:<RestaurantMenu/>,
      },
        
   
     ]
   
   },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={ appRoute} />);



