import "./App.css";
import Homepage from "./Component/Homepage";
import Nav from "./Component/Nav";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Homepage /> */}
    </>
  );
}

export default App;
