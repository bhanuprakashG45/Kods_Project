import { useState, useEffect } from "react";
import axios from "axios";

const ManageEnrollments = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/")
      .then((result) => {
        if(Array.isArray(result.data) ) {
          setEnrollments(result.data);
        }else{
          setEnrollments([]);
        }
      })
      .catch((err) => {
        console.error("Error:",err);
        setEnrollments([]);
      });
    }, []);

  const handleDelete = (id)=> {
    axios
      .delete("http://localhost:8001/deleteEnrollment/" + id)
      .then(res => { console.log(res)
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="py-2 px-4 border-b">Enrollment User</th>
              <th className="py-2 px-4 border-b">Enrollment Course</th>
              <th className="py-2 px-4 border-b">Progress</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.length > 0 ? (
              enrollments.map((course, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border-b">
                    {enrollments.userId}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {enrollments.courseId}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {enrollments.progress}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => {
                        if (window.confirm("Are you sure you want to delete this enrollment?")) {
                          handleDelete(enrollments._id);
                        }
                      }}
                      className="bg-red-500 text-white py-1 px-3 rounded mr-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No data found
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManageEnrollments;
