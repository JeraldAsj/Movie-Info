/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:movieId" element={<Movie />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      {/* <Home /> */}
      <GlobalStyle />
    </Router>
  );
}

export default App;
