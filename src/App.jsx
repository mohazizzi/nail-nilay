import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

// global css
import "./App.css";

// pages
import Home from "./pages/home/Home";
import TakeTurn from "./pages/take-turn/TakeTurn";
import Cost from "./pages/cost/Cost";

// components
import Loader from "./components/loader/Loader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/take-turn" element={<TakeTurn />} />
      <Route path="/cost" element={<Cost />} />
    </Routes>
  );
}

export default App;
