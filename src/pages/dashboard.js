import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <div className="w-1/5 p-4 bg-gray-200">
        <ul className="text-lg space-y-2 cursor-pointer">
          <li>Dashboard</li>
          <li>Settings</li>
          <li onClick={() => navigate("/login")}>Logout</li>
        </ul>
      </div>
      <div className="w-4/5 p-4">
      </div>
    </div>
  );
}

export default Dashboard;
