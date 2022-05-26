import { ROUTES } from "@front/shared/constants";
import { authSelectors } from "@front/entities/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthLayout = () => {
  const isInit = useSelector(authSelectors.selectIsInitialize);
  const location = useLocation();

  if (!isInit) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={ROUTES.home} state={{ from: location }} replace />;
  }

  return (
    <div className="p-2">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
