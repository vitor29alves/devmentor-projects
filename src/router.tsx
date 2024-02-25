import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./App.tsx";
import { Home } from "./pages/Home.tsx";
import { Contact } from "./pages/Contact.tsx";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { NikeAirPage } from "./pages/Nike-air-page.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route
      path="/"
      element={<App />}
      errorElement={<ErrorPage />}
    >
      <Route
        path="/home"
        element={<Home />}
      />,
      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route 
        path="/nike-air-page"
        element={<NikeAirPage />}
      />
    </Route>
  ]
  )
);


