import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; 
import Header from "./component/common/Header/Header"
import Footer from "./component/common/Footer/Footer"
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import AboutUs from "./pages/AboutUs";
import Partners from "./pages/Partners";
import Alumni from "./pages/Alumni";
import Faqs from "./pages/Faqs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Merchandise from "./pages/Merchandise";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us/our-team" element={<AboutUs/>} />
          <Route path="/about-us/partners" element={<Partners/>} />
          <Route path="/about-us/alumni" element={<Alumni/>} />
          <Route path="/about-us/faqs" element={<Faqs/>} />
          <Route path="/resources/gallery" element={<Gallery/>} />
          <Route path="/resources/blog" element={<Blog/>} />
          <Route path="/events/merchandise" element={<Merchandise/>} />
          <Route path="/events/testimonials" element={<Testimonials/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
