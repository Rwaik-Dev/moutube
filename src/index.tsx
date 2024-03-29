import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DetailGame from "./Pages/DetailGame/DetailGame";
import NotFound from "./Pages/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="detail-game/:gameId" element={<DetailGame/>}>
          <Route path="" element={<NotFound/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
