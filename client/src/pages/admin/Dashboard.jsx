import React from "react";
function Dashboard() {
  return (
    <div className="bg-primary">
      <h1>Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        <div className="bg-white shadow-md rounded-lg px-4 py-16">
        </div>
        <div className="bg-white shadow-md rounded-lg px-4 py-16">
        </div>
        <div className="bg-white shadow-md rounded-lg px-4 py-16">
        </div>
        <div className="bg-white shadow-md rounded-lg px-4 py-16">
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
