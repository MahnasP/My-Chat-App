import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {Provider} from "react-redux"
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import store from "./store/store.js";
import AuthLayer from "./components/AuthLayer.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<AuthLayer authNeeded><Home /></AuthLayer>} />
      <Route path="/login" element={<AuthLayer authNeeded={false}><Login /></AuthLayer>} />
      <Route path="/signup" element={<AuthLayer authNeeded={false}><SignUp /></AuthLayer>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
