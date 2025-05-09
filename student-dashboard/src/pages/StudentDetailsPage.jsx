import { useParams } from 'react-router-dom';

export default function StudentDetailsPage() {
    
  const { id } = useParams();

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Student Details</h2>
      <p>Details for student with ID: {id}</p>
      {/* Add logic to fetch and display student details */}
    </div>
  );
}