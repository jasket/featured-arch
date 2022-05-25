import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../model/routes";

const RequireAuth = () => {
  let auth = { user: false };
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={ROUTES.home} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
