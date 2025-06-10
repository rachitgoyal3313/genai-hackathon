import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleHospitalSelect = () => {
    // You can add hospital selection logic here
    navigate('/select-role');
  };

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">Select Hospital</h1>
      <button
        onClick={handleHospitalSelect}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Continue
      </button>
    </div>
  );
}
