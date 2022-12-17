import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Flowers from './FlowersComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Home from './HomeComponent';


const Main = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/home' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/flowers' element={<Flowers />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default Main;
