import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth, ROUTES } from "@front/shared/routing";

const Home = lazy(() => import("./home"));
const About = lazy(() => import("./about"));
const Protected = lazy(() => import("./protected"));

const Pages = () => (
  <Routes>
    <Route path={ROUTES.home} element={<Home />} />
    <Route path={ROUTES.about} element={<About />} />
    <Route element={<RequireAuth />}>
      <Route path={ROUTES.private} element={<Protected />} />
    </Route>
  </Routes>
);

export default Pages;
