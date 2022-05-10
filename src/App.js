import { Routes, Route } from "react-router-dom";

import { ROUTERS } from "./constants/routers";
import "./App.css";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

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
          <Route path={ROUTERS.USER_INFO} element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
