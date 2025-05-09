import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/fireBase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert('Login successful'))
      .catch(err => alert('Login failed: ' + err.message));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <input type="email" placeholder="Email" className="w-full p-2 border mb-2" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="w-full p-2 border mb-4" onChange={e => setPassword(e.target.value)} />
      <button onClick={login} className="bg-green-600 text-white px-4 py-2">Login</button>
    </div>
  );
}