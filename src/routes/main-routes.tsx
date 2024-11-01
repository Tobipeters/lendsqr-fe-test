import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";
import { Users } from "../pages/users";
import { BaseLayout } from "../components";
import { DASHBOARD_URL, LOGIN_URL, USER_DETAILS_URL, USERS_URL } from "../utils/route-url";
import { UserDetails } from "../pages/users/components/user-details";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN_URL} element={<Login />} />

        <Route path={DASHBOARD_URL} element={<BaseLayout />}>
          <Route index element={<Dashboard />} />
          <Route path={USERS_URL} element={<Users />} />
          <Route path={USER_DETAILS_URL} element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
