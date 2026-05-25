import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  if (token !== null) {
    return children;
  }

  return <Navigate to="/" />;
};

export default ProtectedRoute;
