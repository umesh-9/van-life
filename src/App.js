import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans, { loader as vansLoader } from "./Pages/Vans";
import VanDetail from "./Pages/VanDetail";
import Dashboard from "./Pages/Host/Dashboard";

import "./server";
import Layout from "./Components/Layout";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import HostLayout from "./Pages/Host/HostLayout";
import HostVans from "./Pages/Host/HostVans";
import HostVanDetails from "./Pages/Host/HostVanDetails";
import HostVanPricing from "./Pages/Host/HostVanPricing";
import HostVanPhotos from "./Pages/Host/HostVanPhotos";
import HostVanInfo from "./Pages/Host/HostVanInfo";
import NotFound from "./Pages/NotFound(404)";
import Error from "./Components/Error";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route path="/vans/:id" element={<VanDetail />} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="Reviews" element={<Reviews />} />
        <Route path="vans/:id" element={<HostVanDetails />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
