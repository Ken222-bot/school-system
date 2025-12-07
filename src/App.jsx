import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

// Import dashboards
import HeadteacherDashboard from "./pages/headteacher/Dashboard";
import DeputyDashboard from "./pages/deputy/Dashboard";
import BursarDashboard from "./pages/bursar/Dashboard";
import DOSDashboard from "./pages/dos/Dashboard";
import ClassTeacherDashboard from "./pages/classteacher/Dashboard";
import DormMasterDashboard from "./pages/dormmaster/Dashboard";
import StoreDashboard from "./pages/store/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Dashboard routes */}
        <Route path="/headteacher" element={<HeadteacherDashboard />} />
        <Route path="/deputy" element={<DeputyDashboard />} />
        <Route path="/bursar" element={<BursarDashboard />} />
        <Route path="/dos" element={<DOSDashboard />} />
        <Route path="/classteacher" element={<ClassTeacherDashboard />} />
        <Route path="/dormmaster" element={<DormMasterDashboard />} />
        <Route path="/store" element={<StoreDashboard />} />

        
        {/* Default route */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
