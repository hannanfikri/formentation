import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonalDetails from "../pages/PersonalDetails";
import { ThemeProvider } from "@/components/theme-provider";

const AppRoutes: React.FC = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/personal-details" replace />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default AppRoutes;
