import { Routes, Route, Navigate } from "react-router-dom";
import { Settings, SignIn, Dashboard } from "../app/presentation";
import DashboardLayout from "../app/presentation/layouts/main-layout/DashboardLayout";
import MyProfile from "../app/presentation/myProfile/MyProfile";
import ServerError from "../app/presentation/errorPages/ServerError";
import NotFound from "../app/presentation/errorPages/NotFound";
import UnauthorizedError from "../app/presentation/errorPages/UnauthorizedError";
import SubscriptionExpired from "../app/presentation/errorPages/SubscriptionExpire";
import Kanban from "../app/presentation/kanban/Kanban";

const currentUserRole = 1;

const Routerset = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />

      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="/settings" element={<Settings />} />
        <Route path="/my-profile" element={<MyProfile />} />

        <Route path="/kanban" element={<Kanban />} />

        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/internal-server-error" element={<ServerError />} />
      <Route path="/not-found-error" element={<NotFound />} />
      <Route path="/unauthorized-error" element={<UnauthorizedError />} />
      <Route path="/subscription-expired" element={<SubscriptionExpired />} />
    </Routes>
  );
};

export default Routerset;

const PrivateRoute = ({ element, requiredRole }) => {
  if (requiredRole.includes(currentUserRole)) {
    return element;
  } else {
    return <Navigate to="/not-found-error" replace />;
  }
};
