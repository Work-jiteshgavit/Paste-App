
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-blue-500 to-teal-500 p-2 shadow-md'>
      <div className='container mx-auto flex justify-center'>
        <div className='flex flex-row gap-8'>
          <Link
            to="/"
            className={({ isActive }) =>
              `text-white font-semibold px-4 py-1 rounded-md hover:bg-blue-400 transition ${
                isActive ? 'bg-blue-400' : ''
              }`
            }
          >
            Home
          </Link>

          <Link
            to="/pastes"
            className={({ isActive }) =>
              `text-white font-semibold px-4 py-1 rounded-md hover:bg-blue-400 transition ${
                isActive ? 'bg-blue-400' : ''
              }`
            }
          >
            Pastes
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



