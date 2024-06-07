import { Link } from 'react-router-dom';
import Logout from '../logout/Logout';

function CSidebar() {
  return (
    <div>
      <aside className="w-1/6 bg-gray-800 text-white flex flex-col">
        <div className="flex items-center py-24 px-12 justify-center h-24 bg-gray-900">
          <div className="w-32 h-32 rounded-full bg-gray-500"></div>
        </div>
        <nav className="flex-grow">
          <Link to="/dashboard/customer" className="block py-8 px-6 bg-gray-700 hover:bg-gray-600">
            Profile
          </Link>
          <Link to="/dashboard/customer/makeappointment" className="block py-4 px-6 hover:bg-gray-600">
            Appointment
          </Link>
          <Link to="/dashboard/customer/myappointment" className="block py-4 px-6 hover:bg-gray-600">
            My Appointment
          </Link>
          <Logout />
        </nav>
      </aside>
    </div>
  );
}

export default CSidebar;
