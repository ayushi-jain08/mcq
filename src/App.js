import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";

import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
