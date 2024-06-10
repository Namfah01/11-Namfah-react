import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Owner from "./Page/Owner";

function ReactRouterDom() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Owner" element={<Owner />} />
      </Routes>
    </Router>
  );
}

export default ReactRouterDom;
