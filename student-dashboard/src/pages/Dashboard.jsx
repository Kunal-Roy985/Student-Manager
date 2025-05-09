import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    api.get('/students').then(res => setStudents(res.data));
  }, []);

  const filtered = students.filter(s => s.course.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Student List</h2>
      <input
        type="text"
        placeholder="Filter by course"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="border p-2 mb-4 w-full md:w-1/3"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map(s => (
          <div key={s.id} className="p-4 border rounded shadow">
            <h3 className="font-bold">{s.name}</h3>
            <p>{s.email}</p>
            <p className="text-sm text-gray-600">Course: {s.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
}