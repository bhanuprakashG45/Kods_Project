import React from "react";
import AdminNavbar from "./AdminNavbar";

const AdminHome = () => {
  return (
    <div className="container mx-auto m-5 ">
      <AdminNavbar />
      <div className="flex justify-center space-x-4">
        <img
          src="https://img.freepik.com/free-vector/online-certification-graduated-student_23-2148568823.jpg?semt=ais_hybrid"
          alt="admin_image1"
          className="w-1/2"
        />
        <img
          src="https://img.freepik.com/free-vector/virtual-graduation-ceremony-with-college-graduate_23-2148571733.jpg?ga=GA1.1.1832655624.1739100598&semt=ais_hybrid"
          alt="admin_image2"
          className="w-1/2 "
        />
      </div>
    </div>
  );
};

export default AdminHome;
