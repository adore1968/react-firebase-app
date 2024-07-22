import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import { useAuth } from "../context/AuthContext";

function ProtectedRoutePage() {
  const { isLoading, user } = useAuth();

  if (isLoading) return <Loader />;

  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
}

export default ProtectedRoutePage;
