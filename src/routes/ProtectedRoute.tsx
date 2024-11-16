import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  isAuthenticated: boolean;
}

export const ProtectdRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isAuthenticated,
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace/>;
  }

  return <>{children}</>;
};
