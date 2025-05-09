import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <h1 className="font-bold">Student Dashboard</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/add">Add Student</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}