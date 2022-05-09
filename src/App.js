import "./App.css";

import Header from "./layouts/Header";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import { BackTop } from "antd";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
      </div>
      <Home />
      <Footer />
    </>
  );
}

export default App;
