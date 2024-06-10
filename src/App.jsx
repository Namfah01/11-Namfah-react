import "./App.css";
import "./index.css";
import Navbar from "./components/navbar";
import ReactRouterDom from "./Router";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <ReactRouterDom />
    </>
  );
}

export default App;
