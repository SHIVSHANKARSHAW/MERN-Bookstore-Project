import Home from "../Home/Home";
import Course from "../src/components/Course";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Course />} />
        <Route path="/signup" element = {<Signup />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/aboutUs" element = {<About />} />

      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
