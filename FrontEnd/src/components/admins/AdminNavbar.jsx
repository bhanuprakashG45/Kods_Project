import React from 'react'
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
    const navigate = useNavigate();

    const handleCoursesClick = () => {
        navigate("/courses");
      };
    
      const handleEnrollmentsClick = () => {
        navigate("/manage");
      };
      const handleLogOut = () => {
        navigate("/login");
      };
  return (
    <div>
        <div className="mb-4 bg-black text-white p-4 flex justify-between items-center rounded">
        <h1 className="text-2xl font-bold">Welcome To Home Admin...</h1>
        <nav className="flex space-x-4">
          <button
            onClick={handleCoursesClick}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700"
          >
            Courses
          </button>
          <button
            onClick={handleEnrollmentsClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Enrollments
          </button>
          <button
            onClick={handleLogOut}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            LogOut
          </button>
        </nav>
      </div>
    </div>
  )
}

export default AdminNavbar