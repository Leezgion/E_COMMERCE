import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, SignUpPage } from "./Routes.js";

import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
