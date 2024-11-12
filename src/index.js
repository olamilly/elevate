import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "./components/ui/provider.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
	{ path: "/", element: <App /> },
	{ path: "/dashboard", element: <Home /> },
]);
root.render(
	<Provider>
		<RouterProvider router={router} />
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
