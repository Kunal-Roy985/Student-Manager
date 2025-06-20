import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/fireBase';

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth state
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}