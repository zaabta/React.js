import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Carousel />} />
        <Route exact path="/home" element={<Carousel />} />
        <Route exact path="/blog/:slug" element={<Blog />} />
        <Route exact path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
