import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import { Navbar } from "./components/Navbar";
import Academics from "./pages/Academics";
import Project from "./pages/Project";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="h-[100svh] overflow-hidden relative">
      <Analytics />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
