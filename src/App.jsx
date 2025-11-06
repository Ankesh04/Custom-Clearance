// App.jsx – Fixed import path + routes

import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import LoginSignupPage from "./pages/LoginSignupPage/LoginSignupPage.jsx";
import DashboardPage from "./pages/Dashboard/DashboardPage.jsx";
import DocumentUploadPage from "./pages/Dashboard/DocumentUploadPage/DocumentUploadPage.jsx"; // Correct path
import "./index.css";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={
          <PageLayout>
            <div>Home Page Content</div>
          </PageLayout>
        }
      />

      {/* Login */}
      <Route path="/login" element={<LoginSignupPage />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* Documents Section */}
    // App.jsx – Update route
<Route path="/documents" element={<DocumentsPage />} />
     <Route path="/documents/upload" element={<DocumentUploadPage />} />
    </Routes>
  );
}

export default App;