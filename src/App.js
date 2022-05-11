import { Routes, Route } from "react-router-dom";

import { ROUTERS } from "./constants/routers";
import "./App.css";

import Home from "./pages/Home";
import ChangeProfile from "./pages/Profile/ChangeProfile";
import ChangePassword from "./pages/Profile/ChangePassword";

import PrimaryLayout from "./layouts/PrimaryLayout";
import ProfileLayout from "./layouts/ProfileLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrimaryLayout />}>
          <Route path={ROUTERS.HOME} element={<Home />} />
        </Route>
        <Route element={<ProfileLayout />}>
          <Route path={ROUTERS.USER_INFO} element={<ChangeProfile />} />
          <Route
            path={ROUTERS.USER_CHANGE_PASSWORD}
            element={<ChangePassword />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
