import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const StudentHome = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001")
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

 

  const navigate = useNavigate();

  
    const handleEnrolledCoursesClick = () => {
      navigate("/enrolled-courses");
    };
    const handleLogOut = () => {
      navigate("/login");
    };

    const handleEnroll = (id)=> {
      axios
        .post("http://localhost:8001/" +id)
        .then(res => { console.log(res)
          window.location.reload();
        })
        .catch(err => console.log(err));
    };

  return (
    <div className='container mx-auto '>
       <div className="mb-4 bg-slate-400 text-black p-4 flex justify-between items-center rounded gap-0">
        <h1 className="text-2xl font-bold">Welcome To Home ...</h1>
        <nav className="flex space-x-4">
          
          <button
            onClick={handleEnrolledCoursesClick}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700"
          >
            EnrolledCourses
          </button>
          <button
            onClick={handleLogOut}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            LogOut
          </button>
        </nav>
      </div>
      <div className='mb-4 bg-slate-100 text-black p-4 flex justify-between items-center rounded gap-0'>
      
         <table className="w-full table-auto">
         <h2 className="text-xl font-bold mb-4 ">Available Courses</h2>
         <tr className="bg-gray-100 text-center">
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Validity</th>
              <th className="py-2 px-4 border-b">Action</th>

            </tr>
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
                 
                    <button 
                      onClick={() => {
                        if (window.confirm("Are you sure you want to Enroll this course?")) {
                          handleEnroll(course._id);
                        }
                      }}
                      className="bg-green-500 text-white py-1 px-3 rounded mr-2 hover:bg-orange-700"
                    >
                      Enroll
                    </button>
                  
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
  )
}

export default StudentHome