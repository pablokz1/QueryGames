import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/login/index";
import Register from "../pages/register/index";
import Home from "../pages/home/index";
import UserProfile from "../pages/userProfile/index";
import CatalogGames from "../pages/catalogGames/index";
import CatalogPlatform from "../pages/catalogPlatform/index";

const isAuthenticated = localStorage.getItem("token");

function PrivateRoute({ element, path }) {
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: path }} />
  );
}

function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      <Route
        path="/userProfile"
        element={<PrivateRoute element={<UserProfile />} />}
      />
      <Route
        path="/catalogGames"
        element={<PrivateRoute element={<CatalogGames />} />}
      />
      <Route
        path="/catalogPlatform"
        element={<PrivateRoute element={<CatalogPlatform />} />}
      />
      <Route path="*" element={<h1>Hello World</h1>} />
    </Routes>
  );
}

export default RouterMain;
