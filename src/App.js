import { Routes, Route } from "react-router-dom";

import { ROUTERS } from "./constants/routers";
import "./App.css";

import Home from "./pages/Home";
import ChangeProfile from "./pages/profile/ChangeProfile";
import ChangePassword from "./pages/profile/ChangePassword";
import FeatureUpdate from "./pages/profile/FeatureUpdate";

import PrimaryLayout from "./layouts/PrimaryLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import MyTickets from "./pages/profile/MyTickets";
import FilterPage from "./pages/FilterPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrimaryLayout />}>
          <Route path={ROUTERS.HOME} element={<Home />} />
          <Route path={ROUTERS.PAGE_FILTER} element={<FilterPage />} />
        </Route>

        <Route element={<ProfileLayout />}>
          <Route path={ROUTERS.USER_INFO.PATH} element={<ChangeProfile />} />
          <Route
            path={ROUTERS.USER_CHANGE_PASSWORD.PATH}
            element={<ChangePassword />}
          />
          <Route
            path={ROUTERS.USER_PAGE_UNDEVELOPED}
            element={<FeatureUpdate />}
          />
          <Route path={ROUTERS.USER_MY_TICKET.PATH} element={<MyTickets />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
