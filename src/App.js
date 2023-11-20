
import "./App.css";
import Home from "./View/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./View/Pages/About";
import Contact from "./View/Pages/Contact";
import Resource from "./View/Pages/Resource";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Dashboard from "./Admin/Dashboard";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
