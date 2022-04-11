import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { navbarItems } from "./Data/navbarData";
import ListCard from "./components/ListCard/ListCard";
import { Routes, Route } from "react-router-dom";
import Shopcart from "./components/Shopcart/Shopcart";
import testedData from "./Data/testedData.json";
import Shopcard from "./components/Shopcard/Shopcard";
import useFetch from "./useFetch";

const App = () => {
  const [data, isPending, error] =  useFetch("https://fakestoreapi.com/products");
  return (
    <div className="app">
      <div className="header">
        <Navbar items={navbarItems} />
      </div>
      <div className="section">
        <Routes>
          <Route path="/" element={<ListCard list={testedData}/>}/>
          <Route exact  path="/Home" element={<ListCard list={!isPending ? data: null }/>}/>
          <Route path="/shopcart" element={<Shopcart />}/>
          <Route path="/:product" element={<Shopcard />}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
