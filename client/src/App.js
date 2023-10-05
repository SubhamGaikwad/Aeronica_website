import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import About from "./components/About/About";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductCard from "./components/ProductCard/ProductCard";
import Contact from "./components/Contact/Contact";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      {/* <Header />
      <Home />
      <Footer /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
