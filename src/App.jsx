import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
 
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;

 {/* Private
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schools" element={<School />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/school-view/:id" element={<SchoolViewDetailsStudents />} />

       
      </Route> */}
 