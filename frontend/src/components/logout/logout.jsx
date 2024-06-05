import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useUser } from '../../UserContext';

const Logout = () => {
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    console.log('Logout button clicked');
    logout();
    console.log('User logged out');
    navigate('/login'); // Redirect to login page
  };

  return (
    <button
      onClick={handleLogout}
      className="block py-4 px-6 hover:bg-gray-600 text-left w-full"
    >
      Log Out
    </button>
  );
};

export default Logout;
