import { useState } from 'react';
import { auth } from '../services/fireBase';
import { onAuthStateChanged } from 'firebase/auth';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function AddStudentPage() {
  const [student, setStudent] = useState({ name: '', email: '', course: '' });
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  onAuthStateChanged(auth, setUser);

  const handleSubmit = e => {
    e.preventDefault();
    if (!user) return alert('You must be logged in.');
    if (!student.name || !student.email || !student.course) return alert('All fields required');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email)) return alert('Invalid email');
    api.post('/students', student).then(() => navigate('/'));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add New Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border" onChange={e => setStudent({ ...student, name: e.target.value })} />
        <input type="email" placeholder="Email" className="w-full p-2 border" onChange={e => setStudent({ ...student, email: e.target.value })} />
        <input type="text" placeholder="Course" className="w-full p-2 border" onChange={e => setStudent({ ...student, course: e.target.value })} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add</button>
      </form>
    </div>
  );
}