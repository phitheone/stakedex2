import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/home";
import Dapp from "../pages/dapp";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/dapp" element={<Dapp />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
