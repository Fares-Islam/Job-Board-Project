import { HashRouter as Router, Routes, Route } from "react-router-dom";
import JobPosting from "./Pages/jobPosting";
import Home from "./Pages/home";
import Jobs from "./Pages/Jobs";
import About from "./Pages/about";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/JobPosting" element={<JobPosting />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
