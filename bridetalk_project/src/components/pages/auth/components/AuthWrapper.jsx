import { Navigate } from "react-router-dom";
import Parse from "parse";

export const AuthWrapper = ({ children }) => {
  if (Parse.User.current() !== null) {
    isAuthenticated = Parse.User.current().getSessionToken();
    authCondition = isAuthenticated !== undefined;
    if (authCondition) {
      return children;
    }
  }
  return <Navigate to={"/login"} />;
};

