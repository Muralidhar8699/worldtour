import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import "./styles/app.scss";
import Product from "./pages/product";
import Intro from "./pages/intro";
import Pricing from "./pages/pricing";
import { useEffect, useState } from "react";
import Mission from "./pages/mission";
import Login from "./pages/login";
import Tracking from "./components/tracking";
import Application from "./pages/application";
import Form from "./components/form";
import axios from "axios";
import CityList from "./components/cityList";
import CountryList from "./components/countryList";
import City from "./components/City";
const BASE_URL = "http://localhost:9000";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchDetails() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${BASE_URL}/cities`);
        setCities(data);
      } catch (err) {
        alert("there was a error while loading data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchDetails();
  }, []);
  useEffect(() => {}, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <Intro />,
        },
        {
          path: "mission",
          element: <Mission />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/tracking",
      element: <Tracking />,
    },
    {
      path: "/app",
      element: <Application />,
      children: [
        {
          index: true,
          element: <Navigate to={"cities"} replace />,
        },
        {
          path: "cities",
          element: <CityList cities={cities} isLoading={isLoading} />,
        },
        {
          path: "cities/:Id",
          element: <City />,
        },
        {
          path: "countries",
          element: <CountryList cities={cities} isLoading={isLoading} />,
        },
        {
          path: "form",
          element: <Form />,
        },
      ],
    },
  ]);
  return (
    <section className="app">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
