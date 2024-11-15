import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProtectdRoute } from "./ProtectedRoute";
import { Login } from "../pages/Auth/Login";
import { Home } from "../pages/Home";
import { useAuth } from "../hooks/useAuth";
import { Header } from "../components/Header";

export const RoutesComponents = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/home"
        element={
          <ProtectdRoute isAuthenticated={isAuthenticated}>
            <>
              <Header />
              <Home />
            </>
          </ProtectdRoute>
        }
      />
      <Route
        path="/Location"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path="/Blog"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path="/Services"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path="/AboutUs"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path="/Franchise"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
    </Routes>
  );
};
