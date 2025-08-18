import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Settings from "./pages/Settings";
import Cites from "./pages/Cites";

 function RoutePage() {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" component={Home} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
        <Route path="settings" component={Settings} />
        <Route path="cites" component={Cites} />
        <Route path="*" component={ErrorPage} />
      </Routes>
    </HashRouter>
  );
};
