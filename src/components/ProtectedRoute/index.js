import { useNavigate, Route } from "react-router-dom";
import Cookie from "js-cookie";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const token = Cookie.get("jwt_token");
  if (token === undefined) {
    navigate("/login");
    return null;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
