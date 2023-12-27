import { Navigate } from "react-router-dom";

function ProtectedPath({ children }) {
  const token = sessionStorage.getItem("token");
  if (!token) return <Navigate to="/" />;
  return <>{children}</>;
}

export default ProtectedPath;
