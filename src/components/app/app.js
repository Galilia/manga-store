import React from "react";
import {Routes, Route} from "react-router-dom";
import {HomePage, CardPage} from "../pages";
import './app.css';
import ShopHeader from "../shop-header";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210}/>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/cart" element={<CardPage/>}/>
      </Routes>
    </main>
  );
};

export default App;