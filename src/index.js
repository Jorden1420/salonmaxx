import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";

import AppRoutes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

// After
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <AppRoutes />
    </Router>
  </Suspense>
);
