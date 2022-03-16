import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MyAlbum } from "../components/pages/MyAlbum";
import { GetCards } from "../components/pages/GetCards";
import { SeriesInformation } from "../components/pages/SeriesInformation";
import { AppBarCustom } from "../components/ui/organism/AppBarCustom/AppBarCustom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppBarCustom />
      <Routes>
        <Route path="/GetCards" element={<GetCards />} />
        <Route path="/MyAlbum" element={<MyAlbum />} />
        <Route path="/SeriesInformation" element={<SeriesInformation />} />
        <Route path="*" element={<Navigate to="/GetCards" />} />
      </Routes>
    </BrowserRouter>
  );
};
