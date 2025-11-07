// App.jsx – Fixed import path + routes

import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import LoginSignupPage from "./pages/LoginSignupPage/LoginSignupPage.jsx";
import DashboardPage from "./pages/Dashboard/DashboardPage.jsx";
import DocumentUploadPage from "./pages/Dashboard/DocumentUploadPage/DocumentUploadPage.jsx"; // Correct path
import AiAssistantPage from "./pages/Dashboard/AiAssistantPage/AiAssistantPage.jsx";
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
      <Route path="/ai-assistant" element={<AiAssistantPage />} />
      
    {/* Document Upload inside Dashboard */}
      <Route path="/dashboard/documents" element={<DocumentUploadPage />} />
    </Routes>
  );
}

export default App;
