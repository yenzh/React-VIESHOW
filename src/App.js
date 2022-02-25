import { Routes, Route, Link } from "react-router-dom";
import React from 'react';
import Header from "./components/Header";
import Carouse from "./components/Carouse";
import Article from "./components/Article";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header/>
      <Carouse/>
      <Article/>
      <Footer/>

    </>
  );
};

export default App;
