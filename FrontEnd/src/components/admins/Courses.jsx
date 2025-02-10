import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Courses= () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8001/")
      .then((result) => {
        if(Array.isArray(result.data) ) {
          setCourses(result.data);
        }else{
          setCourses([]);
        }
      })
      .catch((err) => {
        console.error("Error:",err);
        setCourses([]);
      });
    }, []);

  const handleDelete = (id)=> {
    axios
      .delete("http://localhost:8001/deleteCourse/" + id)
      .then(res => { console.log(res)
        window.location.reload();
      })
      .catch(err => console.log(err));
  };
  const handleLogOut = () => {
    navigate("/login");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <div className="flex divide-y-10 flex-row-reverse">
          <Link
            to="/createCourse"
            className="bg-blue-600 text-white py-1 px-3 rounded mr-2"
          >
            + CreateCourse
          </Link>
          <button
            onClick={handleLogOut}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 m-2"
          >
            LogOut
          </button>
        </div>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Validity</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border-b">
                    {course.title}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {course.description}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {course.price}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {course.validity}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <Link
                      to={`/updateCourse/${course._id}`}
                      className="bg-amber-600 text-white py-1 px-3 rounded mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        if (window.confirm("Are you sure you want to delete this Course?")) {
                          handleDelete(course._id);
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
export default Courses;
