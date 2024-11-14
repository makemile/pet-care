import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ProtectdRoute } from "./ProtectedRoute";
import { Login } from "../pages/Auth/Login";
import { Home } from "../pages/Home";
import { useAuth } from "../hooks/useAuth";

export const RoutesComponents = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
        <Routes>
      <Route>
      <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <ProtectdRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectdRoute>
          }
        />
      </Route>
    </Routes>
    </Router>
  );
};
