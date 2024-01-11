import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import SignUpPages from "./pages/SignUpPages.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RootLayout from "./components/RootLayout.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<RootLayout />}
        >
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<SignUpPages />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contacts" element={<ContactsPage/>} />
          <Route path="/:id" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
