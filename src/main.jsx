import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import SignUpPages from "./pages/SignUpPages.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RootLayout from "./components/RootLayout.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import CartPage from "./pages/CartPage.jsx";

import store from "../src/components/store.js";
import { Provider } from "react-redux";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import JournalPage from "./pages/JournalPage.jsx";



const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/signup",
        element: <SignUpPages />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/journal",
        element: <JournalPage />,
      },
      {
        path: "/:id",
        element: <ErrorPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);