import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RequireAuth } from './components/auth/RequireAuth';
import { IncidentReportForm } from './components/report/IncidentReportForm';
import { LoginPage } from './components/auth/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/report"
        element={
          <RequireAuth>
            <IncidentReportForm />
          </RequireAuth>
        }
      />
      {/* Add other routes as needed */}
    </Routes>
  );
}

export default App;