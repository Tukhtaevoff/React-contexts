import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Error from "./pages/error/Error";
import About from "./pages/about/About";
import { Layout } from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import EditingUser from './pages/editing/Editing-user';
import AddUser from './pages/add-user/Add-user';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/editing/:id" element={<EditingUser />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
