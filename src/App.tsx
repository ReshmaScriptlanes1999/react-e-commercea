import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import(`./Pages/home/Home`));
function App() {
  const routes = (
    <Routes>
      <Route
        path="/home"
        element={
          <React.Suspense>
            <Home></Home>
          </React.Suspense>
        }
      ></Route>
    </Routes>
  );
  return <BrowserRouter>
  {routes}</BrowserRouter>;
}

export default App;
