import { useState, useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home";
import { NewThread } from "./components/newthread";
import { Header } from "./components/Header";
import { NotFound } from "./components/notfournd";
import { ResList } from "./components/reslist";
import { GetAllThread } from "./components/getAllThread";
import axios from "axios";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/thread/new"  element={<NewThread />} />
        <Route path="/thread/:Id"  element={<ResList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
