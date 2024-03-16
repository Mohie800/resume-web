import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./componenets/layout";
import LandingPage from "./componenets/landingPage";
import Home from "./componenets/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
