import React, { lazy, useState } from "react";

import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./components/HomePage/HomePage"));

const AppRoutes = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
