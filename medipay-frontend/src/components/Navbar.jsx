import React from 'react';

const Navbar = () => (
  <nav className="bg-blue-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">MediPay</h1>
      <div>
        <button className="text-white mr-4">Dashboard</button>
        <button className="text-white">Logout</button>
      </div>
    </div>
  </nav>
);

export default Navbar;