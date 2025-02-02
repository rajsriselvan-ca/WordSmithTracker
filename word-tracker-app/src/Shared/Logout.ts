import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const useLogout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return handleLogout;
};
