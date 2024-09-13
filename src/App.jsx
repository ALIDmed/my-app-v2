import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Analysis from "@/pages/Analysis";
import Faq from "./pages/Faq";

function App() {
  return (
    <>
      <Router basename={import.meta.env.DEV ? "/" : "/my-app/"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
