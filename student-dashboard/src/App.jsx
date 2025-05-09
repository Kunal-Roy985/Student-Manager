import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import AddStudentPage from './pages/AddStudentPage';
import StudentDetailsPage from './pages/StudentDetailsPage'; // Import the student details page
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/student/:id"
          element={
            <ProtectedRoute>
              <StudentDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddStudentPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;