import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonalDetails from "../pages/PersonalDetails";
import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "@/components/layout";

const AppRoutes: React.FC = () => (
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <BrowserRouter>
      <Layout className="flex items-center justify-center min-h-screen">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/personal-details" replace />}
          />
          <Route path="/personal-details" element={<PersonalDetails />} />
          {/* Add more routes here */}
        </Routes>
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);

export default AppRoutes;
